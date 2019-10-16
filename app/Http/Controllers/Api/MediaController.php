<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Storage;
class MediaController extends Controller
{
    private $image_ext = ['jpg', 'jpeg', 'png', 'gif'];
    private $audio_ext = ['mp3', 'ogg', 'mpga'];
    private $video_ext = ['mp4', 'mpeg'];
    /**
     * Upload media
     * @return response server upload media
    */
    public function upload(Request $request)
    {
        try
        {
            $max_size = (int)ini_get('upload_max_filesize') * 1000;
            $all_ext = implode(',', $this->allExtensions());

            $this->validate($request, [
                'file' => 'required|file|mimes:' . $all_ext . '|max:' . $max_size
            ]);

            $file = $request->file('file');
            $ext = $file->getClientOriginalExtension();
            $type = $this->getType($ext);

            Storage::putFile(
                'avatars', $file
            );
            dd('123');
        }
        catch(\Exception $e)
        {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ]);
        }
    }

    /**
     * Get all extensions
     * @return array Extensions of all file types
     */
    private function allExtensions()
    {
        return array_merge($this->image_ext, $this->audio_ext, $this->video_ext);
    }

    /**
     * Get type by extension
     * @param  string $ext Specific extension
     * @return string      Type
     */
    private function getType($ext)
    {
        if (in_array($ext, $this->image_ext))
        {
            return 'image';
        }

        if (in_array($ext, $this->audio_ext))
        {
            return 'audio';
        }

        if (in_array($ext, $this->video_ext))
        {
            return 'video';
        }
    }
}
