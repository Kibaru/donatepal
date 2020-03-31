@extends('layouts.app')

@section('content')

    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">           
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-center">Change your pesapal consumer key and secret</h3>
                    </div>
                    <div class="card-body">
                    <form id="contactForm" action="{{route('consumer')}}" method="POST">
                            <span class="text-danger">*</span>
                            <input type="text" name="key" class="form-control" placeholder="Pesapal consumer key">
                            <span class="text-danger">*</span>
                            <input type="text" name="secret" class="form-control" placeholder="Pesapal consumer secret">
                            <p class="mt-3"> <span class="text-info">Note:</span> All fields are required. </p>
                            <input type="hidden" name="_token" value="{{csrf_token()}}">
                            <input type="submit" value="Submit" class="btn btn-outline-primary float-right">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
