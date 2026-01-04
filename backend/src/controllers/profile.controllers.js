import { Profile } from "../models/profile.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const getProfile = asyncHandler(async (req, res) => {
  try {
    const profile = await Profile.findOne();

    if (!profile) {
      throw new ApiError(404, "profile not created!");
    }
    res.status(200).json(profile);
  } catch (error) {
    throw new ApiError(500, "Something went wrong with server", error.message);
  }
});


const updateProfile = asyncHandler(async(req,res)=>{
    try {
        const profile = await Profile.findOneAndUpdate(
            {},
            {
                name,
                email,
                socialLinks,
                avatar,
    
            },
            {new:true, upsert:true}
        )
        res.status(200).json({success:true, message:"Profile update successfully",data:profile})
    } catch (error) {
        throw new ApiError(400,"Something went wrong while updating profile",error.message)
    }
})

export {getProfile,updateProfile}