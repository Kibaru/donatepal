@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 mt-5">
            <div class="card">
                <div class="card-header">
                    <h3 class="text-center">I will appreciate your donation.</h3>
                </div>
                <div class="card-body">
                    {!! $iframe !!}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection