require('dotenv').config();
require('./router/index')
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from '../node_modules/jquery/dist/jquery.min.js'
createApp(App).use(router).mount('#app')



jQuery(document).ready(function ($) {
    $('.popup-open-click-js').on('click', function (){
        $(this).closest('.popup-wrapper').find('.popup-modal').addClass('is-active')
    })

    $('.modal-close, .modal-close-button').on('click', function (){

        $(this).closest('.popup-modal').removeClass('is-active')
    })

    $('.buter-top, .buter-button').on('click', function (){
        $(this).closest('.buter').find('.buter-bottom').toggle('is-active')
    })
});