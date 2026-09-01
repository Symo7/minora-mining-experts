-- 014_atomic_quote_mutations.sql
CREATE OR REPLACE FUNCTION public.update_quote_status_atomic(
  p_quote_id UUID,
  p_new_status public.quote_status_enum,
  p_actor_id UUID,
  p_internal_note TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS 
DECLARE
  v_prev_status public.quote_status_enum;
  v_updated_at TIMESTAMPTZ := NOW();
BEGIN
  SELECT status INTO v_prev_status
  FROM public.quote_requests
  WHERE id = p_quote_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Quote request not found';
  END IF;

  UPDATE public.quote_requests
  SET status = p_new_status, updated_at = v_updated_at
  WHERE id = p_quote_id;

  INSERT INTO public.quote_audit_logs (
    quote_id, actor_id, previous_status, new_status, internal_note, created_at
  ) VALUES (
    p_quote_id, p_actor_id, v_prev_status, p_new_status, p_internal_note, v_updated_at
  );

  RETURN jsonb_build_object('success', true, 'previous_status', v_prev_status, 'new_status', p_new_status);
END;
;
