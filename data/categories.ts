import { Category } from "@/data/types";

import gradientGenerator from "@/data/tools/color/gradeintGenerator";
import ImageResizer from "@/data/tools/images/imageResizer";
import MP4ToGIF from "@/data/tools/video/mp4ToGif";
import GIFToMP4 from "@/data/tools/video/gifToMP4";
import RegexTester from "@/data/tools/testers/regexTester";
import ColorContrastChecker from "@/data/tools/color/colorContrastChecker";
import Base64EncoderDecoder from "@/data/tools/converters/base64EncoderDecoder";
import HtmlToJsx from "@/data/tools/converters/HtmlToJsx";
import JsonYaml from "@/data/tools/converters/JsonYaml";
import UnixTime from "@/data/tools/converters/UnixTime";
import RandomString from "@/data/tools/generators/randomString";

const categories: Category[] = [
  {
    id: 1,
    name: "Color",
    children: [gradientGenerator, ColorContrastChecker],
    slug: "color",
    directory: "Color",
  },
  {
    id: 2,
    name: "Image",
    children: [ImageResizer],
    slug: "image",
    directory: "Image",
  },
  {
    id: 3,
    name: "Video",
    children: [MP4ToGIF, GIFToMP4],
    slug: "video",
    directory: "Video",
  },
  {
    id: 4,
    name: "Testers",
    children: [RegexTester],
    slug: "testers",
    directory: "Testers",
  },
  {
    id: 5,
    name: "Converters",
    children: [Base64EncoderDecoder, HtmlToJsx, JsonYaml, UnixTime],
    slug: "converters",
    directory: "Converters",
  },
  {
    id: 6,
    name: "Generators",
    children: [RandomString],
    slug: "generators",
    directory: "Generators",
  },
];

export default categories;
