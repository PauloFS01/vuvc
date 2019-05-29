<template>
    <div class="wrapper" >
        <div class="img-background">
            <i class="fas fa-arrow-left growIn-hover"></i>
            <div id="profile-avatar">
                <!--<img src="https://picsum.photos/id/1074/300/400/">-->
                <div></div>
            </div>
            <div id="profile-label">
                <h1>Name here</h1>
                <h2>Description here</h2>
            </div>
        </div>
        <div class="footer">
            <div class="div-buttom"><i class="far fa-image"></i></div>
            <div class="div-buttom"><i class="far fa-heart"></i></div>
            <div class="div-buttom"><i class="far fa-comment-dots"></i></div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

// colors
$font-color: #8395a7;
$icon-color: #16a085;
$bottom-color: #353b48;

// variation
$font-25: lighten($font-color, 25%);
$font-50: lighten($font-color, 10%);
$font-100: $font-color;
$font-200: darken($font-color, 10%);
$font-400: darken($font-color, 20%);

$icon-25: lighten($icon-color, 25%);
$icon-50: lighten($icon-color, 10%);
$icon-100: $icon-color;
$icon-200: darken($icon-color, 10%);
$icon-400: darken($icon-color, 20%);

$bottom-25: lighten($bottom-color, 25%);
$bottom-50: lighten($bottom-color, 10%);
$bottom-100: $bottom-color;
$bottom-200: darken($bottom-color, 10%);
$bottom-400: darken($bottom-color, 20%);

body {
    margin:0;
    padding:0;
}
.wrapper{
    display:grid;
    grid-template-rows:repeat(10, 1fr);
    box-shadow:0px 0px 35px #888888;
    font-family:arial, sans-serif!important;
    font-size:1.2rem;
    color:$font-100;
    position:relative;
}
.img-background {
    padding:2rem;
    background-image:linear-gradient(transparent, $font-50), url(https://picsum.photos/id/1047/3264/2448/?blur=10);
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    grid-row:1/9;        
    i {
        color:$icon-25;
    }
}
#profile-avatar {
    width:8rem;
    height:8rem;
    border-radius:12px;
    // clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background-color:$font-400;
    margin:auto;        
    position:absolute;
    left:35%;
    top:-10%;
    overflow:hidden;
    background-image:url(https://picsum.photos/id/1074/300/400/);
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;    
}
#profile-label {
    font-size:1.3rem;
    text-align:center;
    margin:auto;
    color:$font-400;
    padding:2.5rem;
    margin-top:5px;
    h1,h2 {
        margin:0;
        padding:0;
    }
}
.footer {
    background:$bottom-200;
    display:grid;
    grid-row:9/11;
    grid-template-columns:repeat(3, 1fr);
    box-sizing:border-box;
    color:$icon-100;
    div {
        display:flex;
        align-items:center;
        justify-content:center;
        &:nth-child(2) {
            border-left:solid $font-400 1px;
            border-right:solid $font-400 1px;
        }
        &:hover {
            background:$bottom-100;
            color:$icon-50;  
            i {
                animation: growIn .3s;
            }       
        }
        &:active {
            background:$bottom-400;
            color:$icon-25;
        }
    }
}
.growIn-hover {
    &:hover {
        animation: growIn .3s;
    }  
}
@keyframes growIn {
    0% {
        transform-origin: center center;
        transform: scale(1.3);
    } 
    50% {
        transform-origin: center center;
        transform: scale(1.2);
    }     
    100% {
        transform-origin: center center;
        transform: scale(1);
    } 
}
</style>