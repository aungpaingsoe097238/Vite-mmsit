export function showLoaderUi() {
    let loader = document.createElement('div');
    loader.classList.add('loader','animate__animated','animate__fadeIn');
    loader.innerHTML = `
        <div class="min-vh-100 bg-white d-flex justify-content-center fixed-top align-items-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
    `;
    document.body.append(loader);
}

export function removeLoaderUi() {
    let loader = document.querySelector('.loader');
    loader.classList.replace('animate__fadeIn','animate__fadeOut');
    loader.addEventListener('animationend',_=>loader.remove());
}