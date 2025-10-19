"use client";

import { useState } from "react";
import { useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodType } from "zod";

export function useForm<T = any>(
  schema: ZodType<T>,
  onSubmit: (data: T) => Promise<void>
) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useHookForm({
    resolver: zodResolver(schema as any),
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmitHandler = async (data: T) => {
    try {
      setSubmitError(null);
      await onSubmit(data);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmitHandler),
    errors,
    isSubmitting,
    submitError,
  };
}
