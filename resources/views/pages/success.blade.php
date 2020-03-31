@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <div class="row page-offset-3">
        <div class="col-md-6 offset-3"> 
            @if(count($donations) > 0)
                @foreach($donations as $donation)
                <h2 title="Click to view donor.">{{$donation->name}}</h2>
                @endforeach
            @else
                <p>No donations made yet.</p>
            @endif
        </div>
    </div>
</div>
@endsection