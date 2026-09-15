import React from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ImageInput = ({image,imageHandler}) => {
  return (
    <label className="mb-3 -mt-1">
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <CameraAltIcon
            sx={{
              fontSize: 15,
              color: "white",
            }}
          />
        }
        sx={{
          "& .MuiBadge-badge": {
            width: 24,
            height: 24,
            borderRadius: "50%",
            backgroundColor: "#0E1D2C",
            border: "2px solid white",
          },
        }}
      >
        <Avatar
          src={image}
          sx={{
            width: 50,
            height: 50,
            cursor: "pointer",
          }}
        />
      </Badge>

      <input
        type="file"
        accept="image/*"
        hidden
        onChange={imageHandler }
        name=""
      />
    </label>
  );
};

export default ImageInput;
