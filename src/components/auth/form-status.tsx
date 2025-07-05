import { AlertCircle, CheckCircle2 } from "lucide-react";

export const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;

  return (
    <div
      className="animate-in fade-in flex items-center gap-2 rounded-md p-2 text-[0.825rem] text-red-500 duration-300"
      role="alert"
    >
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
      <span>{message}</span>
    </div>
  );
};

export const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
      <CheckCircle2 className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
