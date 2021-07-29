import en from "date-fns/locale/en-US";
import { format as _format, formatRelative as _formatRelative } from "date-fns";

export function format(date: Date | string | number, template?: string) {
  return _format(new Date(date), template || "MM/dd/yyyy");
}

export function formatRelative(
  date: Date | string | number,
  map: Record<string, string>,
) {
  const base: Record<string, string> = {
    lastWeek: map.other || "MM/dd/yyyy",
    yesterday: map.other || "MM/dd/yyyy",
    today: map.other || "MM/dd/yyyy",
    tomorrow: map.other || "MM/dd/yyyy",
    nextWeek: map.other || "MM/dd/yyyy",
    other: map.other || "MM/dd/yyyy",
    ...map,
  };

  return _formatRelative(new Date(date), new Date(), {
    locale: {
      ...en,
      formatRelative: (token: string) => base[token],
    },
  });
}
