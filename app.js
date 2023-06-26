"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getBingImageOfTheDay() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const response = yield axios_1.default.get(
        "https://www.bing.com/HPImageArchive.aspx",
        {
          params: {
            format: "js",
            idx: 0,
            n: 1,
          },
        }
      );
      const imageUrlBase = response.data.images[0].urlbase;
      const imageUrl = `https://www.bing.com${imageUrlBase}_1920x1080.jpg`;
      return imageUrl;
    } catch (error) {
      if (axios_1.default.isAxiosError(error)) {
        const axiosError = error;
        console.error("An error occurred:", axiosError.message);
      } else {
        console.error("An error occurred:", error);
      }
      throw error; // Re-throw the error to propagate it if necessary
    }
  });
}
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const imageUrl = yield getBingImageOfTheDay();
      // Implement the logic to set the wallpaper using platform-specific libraries or tools.
      console.log("Bing image URL:", imageUrl);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
}
main();
