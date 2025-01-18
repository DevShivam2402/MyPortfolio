"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { encode } from "qss";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  ExternalLink,
} from "lucide-react";

export const LinkPreview = ({
  url,
  quality = 50,
  isStatic = false,
  imageSrc = "",
}) => {
  let src;
  if (!isStatic) {
    const encodedUrl = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
    });
    src = `https://api.microlink.io/?${encodedUrl}`;
  } else {
    src = imageSrc;
  }

  return (
    <a
      href={url}
      className="block p-1   shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800 h-full max-w-xl "
      style={{ fontSize: 0 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={src}
        width={1000} // Updated size for responsiveness
        height={1000}
        quality={quality}
        priority={true}
        className="rounded-lg h-[30vh] w-full object-cover"
        alt="preview image"
      />
    </a>
  );
};

const WebsitePreview = ({ url }) => {
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const response = await fetch(
          `https://api.microlink.io?url=${encodeURIComponent(url)}`
        );
        const data = await response.json();

        if (data.status === "success") {
          setPreviewData(data.data);
        } else {
          setError("Failed to load preview");
        }
      } catch (err) {
        setError("Error loading preview");
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchPreview();
    }
  }, [url]);

  if (loading) {
    return (
      <div className="w-full bg-white h-full overflow-hidden  rounded-lg">
        <div className="p-2 w-full  h-[60vh]  ">
          <div className="w-full h-[40vh]  bg-gray-400 rounded-lg inset-0 animate-pulse" />
          <div className="space-y-5 h-full  justify-between  flex flex-col p-4">
            <div className="bg-gray-400 h-10 rounded-lg inset-0 animate-pulse w-[70%]" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-white">{error}</div>;
  }

  return (
    <Card className="w-96  border-none hover:shadow-lg hover:scale-105 ">
      <CardContent className="p-2 w-full grid grid-cols-1  justify-center gap-6">
        <LinkPreview url={url} />
        <div className="space-y-6 h-full  justify-between  flex flex-col p-4">
          <div>
            <h3 className="font-bold text-xl line-clamp-2">
              {previewData?.title || "No title available"}
            </h3>
            {/* <p className="text-gray-600 text-lg line-clamp-3">
              {previewData?.description || "No description available"}
            </p> */}
          </div>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button className="flex gap-2 w-full">
              <span>Live</span> <ExternalLink size={24} />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebsitePreview;
