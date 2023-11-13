import React from "react";
import { CatalogTitle, CatalogCursorTitle } from "./CatalogProperty";
import { LayoutImageCatalog } from "./Gallery";

export default function Catalog() {
  const { catalogTitle } = CatalogTitle();
  const { onEnterTitle, onLeaveTitle } = CatalogCursorTitle();

  return (
    <>
      <div className="catalog">
        <div className="catalog-title" ref={catalogTitle}>
          <span
            className="catalog-title-text"
            onMouseEnter={onEnterTitle}
            onMouseLeave={onLeaveTitle}
          >
            <span className="catalog-title-text-0">product</span>
          </span>
          <span
            className="catalog-title-text"
            onMouseEnter={onEnterTitle}
            onMouseLeave={onLeaveTitle}
          >
            <span className="catalog-title-text-1">catalogs</span>
          </span>
        </div>
        <div className="catalog-product">
          <LayoutImageCatalog imageIndex={0} />
          <LayoutImageCatalog imageIndex={1} />
          <LayoutImageCatalog imageIndex={2} />
          <LayoutImageCatalog imageIndex={3} />
          <LayoutImageCatalog imageIndex={4} />
          <LayoutImageCatalog imageIndex={5} />
          <LayoutImageCatalog imageIndex={0} />
          <LayoutImageCatalog imageIndex={1} />
          <LayoutImageCatalog imageIndex={2} />
          <LayoutImageCatalog imageIndex={3} />
          <LayoutImageCatalog imageIndex={4} />
        </div>
      </div>
    </>
  );
}