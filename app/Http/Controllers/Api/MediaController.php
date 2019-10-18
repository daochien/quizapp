<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Media;
use Storage, Image, Validator;
class MediaController extends Controller
{
    private $image_ext = ['jpg', 'jpeg', 'png', 'gif'];
    private $audio_ext = ['mp3', 'ogg', 'mpga'];
    private $video_ext = ['mp4', 'mpeg'];
    protected $_pathUpload = 'uploads/';
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

            $validator = Validator::make($request->all(), [
                'files' => 'required'
            ]);

            if ($validator->fails())
            {
                throw new \Exception($validator->errors()->first());
            }

            $files = $request->file('files');
            foreach($files as $file)
            {
                $ext = $file->getClientOriginalExtension();
                $type = $this->getType($ext);
                $pathUpload = $this->_pathUpload.$type.'/'.$request->user()->id;
                $storage = $this->_upload($file, $pathUpload);

                if($storage)
                {
                    if($type == 'image')
                    {
                        $pathCover = $pathUpload.'/resize';
                        $imageCover = $this->_resizeImage($file, $pathCover);

                        if(!$imageCover)
                        {
                            $this->_remove($storage);
                        }
                    }

                    Media::create([
                        'name' => $file->hashName(),
                        'path' => $storage,
                        'extension' => $type,
                        'path_cover' => !empty($imageCover) ? $pathCover.'/'.$file->hashName() : '',
                        'user_id' => $request->user()->id
                    ]);
                }
            }

            return response()->json([
                'status' => true,
                'message' => 'upload success'
            ]);
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

    /**
     * Resize image
     * @return path_cover
    */
    protected function _resizeImage($file , $pathUpload)
    {
        $resize_image = Image::make($file->getRealPath());
        $resize_image->fit(250, 250, function($constraint) {
            $constraint->aspectRatio();
        });
        $cover = Storage::disk('public_uploads')->put($pathUpload.'/'.$file->hashName(), (string) $resize_image->encode());
        return $cover;
    }

    /**
     * Upload media
     * @return path
    */
    protected function _upload($file, $pathUpload)
    {
        $storage = Storage::disk('public_uploads')->putFile($pathUpload, $file);
        return $storage;
    }

    /**
     * Remove media
     * @return boolean
    */
    public function _remove($path)
    {
        if(Storage::disk('public_uploads')->exists($path))
        {
            return Storage::disk('public_uploads')->delete($path);
        }
        return false;
    }
}
