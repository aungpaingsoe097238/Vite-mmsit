import './style.scss'
import * as bootstrap from 'bootstrap'

function showLoaderUi() {
    let loader = document.createElement('div');
    loader.classList.add('loader','animate__animated','animate__bounce');
    loader.innerHTML = `
        <div style=" background-color: #ffffff80 ; " class="min-vh-100 bg-black d-flex justify-content-center fixed-top align-items-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
    `;
    document.body.append(loader);
}

function removeLoaderUi() {
    let loader = document.querySelector('.loader');
    loader.remove();
}

showLoaderUi();
setTimeout(_=>removeLoaderUi(),5000)

