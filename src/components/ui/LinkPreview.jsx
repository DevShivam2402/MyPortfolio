"use client";


import Image from "next/image";
import { encode } from "qss";
import React from "react";
import Link from "next/link";

export const LinkPreview = ({
  
  url,
  
 
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}) => {
  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
     
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

 

  return (
    <>
      <Link
        href={url}
        className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
        style={{ fontSize: 0 }}
      >
        <Image
          src={isStatic ? imageSrc : src}
          width={1000}
          height={1000}
          quality={quality}
          layout={layout}
          priority={true}
          className="rounded-lg aspect-square h-56 w-56"
          alt="preview image"
        />
      </Link>
    </>
  );
};
