import InternalLink from "components/blocks/InternalLink";
import { renderHTML } from "lib/html";
import { Image as DatoImage } from "react-datocms";
import Icon from "components/layout/Icon";

export default function VideoCard({ locale, record }) {
  return (
    <>
      <InternalLink
        element={record}
        label={record.title}
        className="group"
        locale={locale}
        slug={record.slug}
      >
        <div className="bg-yellow-light text-black p-3 lg:p-5">
          {record.imageHero && (
            <DatoImage
              className=""
              data={record.imageHero.responsiveImage}
              alt={record.imageHero.responsiveImage.alt}
              title={record.imageHero.responsiveImage.title}
              layout=""
            />
          )}
          <div className="grid gap-2 content-start pt-4 lg:pt-6">
            <h2 className="uppercase font-serif text-xl hover-text-red">
              {record.title}
            </h2>
            {record.textHero && (
              <h3 className="line-clamp-3 text-sm opacity-80 mb-1 xl:text-base">
                {renderHTML(record.textHero)}
              </h3>
            )}
            <div className="w-10 h-8 group-hover:bg-red duration-300 rounded-[50%] bg-black relative lg:mt-2 lg:mb-4">
              <Icon
                name="arrow"
                className={`absolute centered`}
                size="20"
                fill="white"
              />
            </div>
          </div>
        </div>
      </InternalLink>
    </>
  );
}
