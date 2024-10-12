import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredImage }) {
  console.log(title.length, "Title Length");
  console.log(
    title.length > 30 ? title.substring(0, 29) + "..." : title,
    "shorting"
  );
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-900 text-[#FFFDF2] rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">
          {title.length > 30 ? title.substring(0, 29) + "..." : title}
        </h2>
      </div>
    </Link>
  );
}

export default Postcard;
