<?php

namespace App\Http\Controllers\Api;

use App\Api\ApiMessages;
use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\UserAll;
use Illuminate\Http\Request;

class UserAllController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private $user;

    public function __construct(UserAll $user)
    {
        $this->user = $user;
    }

    public function GetAllUsers()
    {
        try{
            $user = $this->user->All();

            return response()->json($user, 200);

        }catch(\Exception $e){
            $message = new ApiMessages($e->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }

    public function update(Request $request){
        $data = $request->all();

        if(!$request->has('password') && !$request->get('password'))
        {
            $data['password'] = bcrypt($data['password']);
        }else {unset($data['password']);}

        try{
            $user = $this->user->findOrFail($data['id']);
            $user->update($data);
            
            return response()->json($user, 200);

        }catch(\Exception $e){
           
            $message = new ApiMessages($e->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }



}
