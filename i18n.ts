import {getRequestConfig} from 'next-intl/server';
import { locales } from './config';
import { notFound } from 'next/navigation';
 

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === "fa"
        ? // When using Turbopack, this will enable HMR for `en`
          import("./messages/fa.json")
        : import(`./messages/${locale}.json`))
    ).default,
  };
});
