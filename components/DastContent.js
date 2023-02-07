import { StructuredText } from "react-datocms";
import {
  renderRule,
  isHeading,
  isThematicBreak,
  isList,
  // isListItem,
  isBlockquote,
  isParagraph,
} from "datocms-structured-text-utils";

import ArtworksBlock from "./blocks/ArtworksBlock";
import AttachmentsBlock from "./blocks/AttachmentsBlock";
import Banner from "./blocks/Banner";
import CardBlock from "./blocks/CardBlock";
import FaqBlock from "./blocks/FaqBlock";
import FlagButtonBlock from "./blocks/FlagButtonBlock";
import GalleryBlock from "./blocks/GalleryBlock";
import LogosBlock from "./blocks/LogosBlock";
import MilestonBlock from "./blocks/MilestonBlock";
import PropertiesBlock from "./blocks/PropertiesBlock";
import Icon from "./layout/Icon";
import ImageBlock from "./blocks/ImageBlock";

export default function DastContent({ content, locale, site, color }) {
  return (
    <StructuredText
      data={content}
      color={color}
      renderBlock={({ record }) => {
        switch (record.model) {
          case "artworks_block":
            return (
              <div>
                <ArtworksBlock record={record} locale={locale} site={site} />
              </div>
            );
          case "attachments_block":
            return (
              <div>
                <AttachmentsBlock
                  record={record}
                  locale={locale}
                  color={color}
                />
              </div>
            );
          case "banner_block":
            return (
              <div>
                <Banner record={record} locale={locale} />
              </div>
            );
          case "card_block":
            return (
              <div>
                <CardBlock record={record} locale={locale} />
              </div>
            );
          case "faq_block":
            return (
              <div>
                <FaqBlock record={record} locale={locale} />
              </div>
            );
          case "flag_button_block":
            return (
              <div>
                <FlagButtonBlock record={record} locale={locale} />
              </div>
            );
          case "gallery_block":
            return (
              <div>
                <GalleryBlock record={record} locale={locale} />
              </div>
            );
          case "logos_block":
            return (
              <div>
                <LogosBlock record={record} locale={locale} />
              </div>
            );
          case "mileston_block":
            return (
              <div>
                <MilestonBlock record={record} locale={locale} />
              </div>
            );
          case "properties_block":
            return (
              <div>
                <PropertiesBlock record={record} locale={locale} />
              </div>
            );
          case "image_block":
            return (
              <div>
                <ImageBlock record={record} locale={locale} />
              </div>
            );
          default:
            return <></>;
        }
      }}
      customRules={[
        renderRule(isHeading, ({ node, children, key }) => {
          const Tag = `h${node.level}`;
          let classTitle;
          if (node.level == 2) {
            classTitle = "text-lg xl:text-2xl";
          } else classTitle = "font-bold xl:text-lg";
          return (
            <div key={key} className="container xl:grid xl:grid-cols-12">
              <div className="xl:col-span-10 xl:col-start-2">
                <Tag className={classTitle}>{children}</Tag>
              </div>
            </div>
          );
        }),
        renderRule(isParagraph, ({ children, key }) => {
          return (
            <div key={key} className="container xl:grid xl:grid-cols-12 ">
              <div className="xl:col-span-10 xl:col-start-2">
                <p className="text-inherit/80 xl:text-lg">{children}</p>
              </div>
            </div>
          );
        }),
        renderRule(isList, ({ children, key, node }) => {
          return (
            <div
              key={key}
              className="container custom-list xl:grid xl:grid-cols-12 "
            >
              {node.style == "numbered" ? (
                <ol className="xl:col-span-10 xl:col-start-2 ml-4">
                  {children}
                </ol>
              ) : (
                <ul className="xl:col-span-10 xl:col-start-2 ml-4">
                  {children}
                </ul>
              )}
            </div>
          );
        }),
        renderRule(isThematicBreak, () => {
          return (
            <div className="container ">
              <hr className="opacity-40" />
            </div>
          );
        }),
        renderRule(isBlockquote, ({ node, children, key }) => {
          const contentClass =
            color === "light"
              ? "border border-black/20 py-12 xl:py-20 px-4 xl:col-span-10 xl:col-start-2"
              : "border border-white/10 py-12 xl:py-20 px-4 xl:col-span-10 xl:col-start-2";
          return (
            <blockquote
              key={key}
              className="px-4 py-6 container xl:grid xl:grid-cols-12 lg:py-12"
            >
              <div className={contentClass}>
                <div className="px-4 mb-2 xl:px-20 lg:mb-6">
                  <Icon
                    name="quote"
                    className={`${
                      color === "light" ? "fill-red" : "fill-[#E0AA4C]"
                    } xl:scale-150 ml-1`}
                    size="25"
                  />
                </div>
                <div className="mb-2 xl:px-20 lg:mb-6">{children}</div>
                <footer className="text-xxs uppercase font-semibold pt-6 px-4 xl:px-20">
                  {node.attribution}
                </footer>
              </div>
            </blockquote>
          );
        }),
      ]}
    />
  );
}
