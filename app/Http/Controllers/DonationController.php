<?php

namespace App\Http\Controllers;

use Mail;
use Pesapal;
use App\Donate;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Mail\PaymentReminder;

class DonationController extends Controller
{
    public function donate(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|min:2|unique:users',
            'phone' => 'numeric|min:10|nullable',
            'email' => 'required|email|unique:users',
            'amount' => 'required|numeric',
            'period' => 'required',
        ]);

        $donate = Donate::create([
            'name' => $validatedData['name'],
            'phone' => $validatedData['phone'],
            'email' => $validatedData['email'],
            'amount' => $validatedData['amount'],
            'period' => $validatedData['period'],
            'status' => 'PENDING',
            'transactionid' => Pesapal::random_reference(),
        ]);

        if ($donate ->period != 'One-off'){
          Mail::to($donate->email)->send(new PaymentReminder($donate));
        }

        $details = array(
            'amount' => $donate -> amount,
            'description' => 'Donate Transaction',
            'type' => 'MERCHANT',
            'first_name' => $donate -> name,
            'last_name' => $donate -> name,
            'email' => $donate -> email,
            'phonenumber' => $donate -> phone,
            'reference' => $donate-> transactionid,
            'height'=>'400px',
            'currency' => 'KES'
        );
        $iframe=Pesapal::makePayment($details);

        // return view('pages.iframe')->with('iframe', $iframe);

        return response()->json([
            'message' => 'Thanks you for your contribution',
            'details' => $details,
        ]);

        // return response()->json([
        //     'message' => 'Thanks you for your donation.',
        //     'iframe' => $iframe,
        // ]);
    }

    // Get donors details
    public function success(Request $request)
    {
        $donations=Donate::all();
        // return view('pages.success')->with('donations', $donations);

        return response()->json([
            'donations' => $donations,
        ]);
    }


    // chaange consumer key and consumer secret
    public function consumer(Request $request)
    {
        $validatedData = $request->validate([
            'key' => 'required|min:2',
            'secret' => 'required|min:2',
        ]);
        // dd($validatedData);

        // config(['pesapal.consumer_key' => $validatedData['key']]);
        // config(['pesapal.consumer_secret' => $validatedData['secret']]);

        $path = base_path('.env');

        $key=env('PESAPAL_CONSUMER_KEY');
        $secret=env('PESAPAL_CONSUMER_SECRET');

        if (file_exists($path)) {
            file_put_contents($path, str_replace(
                'PESAPAL_CONSUMER_KEY='.$key, 'PESAPAL_CONSUMER_KEY='.$validatedData['key'], file_get_contents($path)
            ));
            file_put_contents($path, str_replace(
                'PESAPAL_CONSUMER_SECRET='.$secret, 'PESAPAL_CONSUMER_SECRET='.$validatedData['secret'], file_get_contents($path),
            ));
        }
    
        return response()->json([
            'message' => 'success',
        ]);
    }
}
