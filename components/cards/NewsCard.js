import { renderHTML } from "lib/html";
import { Image as DatoImage } from "react-datocms";
import Button from "components/layout/Button";
import t from "lib/locales";
import InternalLink from "components/blocks/InternalLink";

export default function NewsCard({ locale, news }) {
  const image = news.image;
  const categoryClass =
    "uppercase white text-xxs bg-black text-white tracking-wide lg:mt-0 rounded-2xl py-2 px-4 inline-block mt-4 lg:top-auto lg:left-auto hover:bg-red duration-200";

  return (
    <>
      <div className="bg-yellow-light text-black p-3 lg:p-8 md:p-6">
        <div className="lg:flex gap-2 lg:flex-row-reverse lg:pt-0">
          <div className="grid gap-4 content-start relative lg:w-1/2">
            <DatoImage
              className=""
              data={image.responsiveImage}
              alt={image.responsiveImage.alt}
              title={image.responsiveImage.title}
              layout=""
            />
          </div>
          <InternalLink
            element={news.category}
            locale={locale}
            label={news.category.title}
            className="group z-20 relative"
          >
            <div className={`${categoryClass} lg:hidden`}>
              {news.category.title}
            </div>
          </InternalLink>
          <div className="pt-4 lg:pt-0 lg:w-1/2">
            <div className="grid gap-3 lg:max-w-xs lg:h-full content-between">
              <div className="grid gap-3 content-start">
                <div className="text-xxs font-semibold lg:flex lg:items-center lg:gap-4 lg:text-xs lg:pb-3">
                  <InternalLink
                    element={news.category}
                    locale={locale}
                    label={news.category.title}
                    className="group z-20 relative"
                  >
                    <div
                      aria-hidden="true"
                      className={`${categoryClass} hidden lg:block`}
                    >
                      {news.category.title}
                    </div>
                  </InternalLink>
                  <span className="lg:opacity-80 lg:font-light">
                    {news.info}
                  </span>
                </div>
                <h2 className="text-xl font-serif lg:text-2xl">{news.title}</h2>
                {news.abstract && (
                  <h3 className="opacity-80 mb-1 xl:text-base">
                    {renderHTML(news.abstract)}
                  </h3>
                )}
              </div>
              <InternalLink
                label={news.title}
                className="group"
                element={news}
                locale={locale}
                slug={news.slug}
              >
                <Button
                  locale={locale}
                  arrow={true}
                  color="transparentInv"
                  label={t("more", locale)}
                />
              </InternalLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
