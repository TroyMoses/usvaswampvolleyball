function ReadLess() {

    // const parentContainer = document.querySelector('.read-more-container');

    // parentContainer.addEventListener('click', event => {

    //     const current = event.target;

    //     const isReadMoreButton = current.className.includes('.read-more-btn');

    //     if(!isReadMoreButton) return;

    //     const currentText = event.target.parentNode.querySelector('.read-more-text');

    //     currentText.classList.toggle('read-more-text--show');

    //     current.textContent = current.textContent.includes('Read More') ? 'Read Less...' : 'Read More';
    // })

    const button = document.getElementById('read-more-btn');
    const buttonLess = document.getElementById('read-less-btn');
    const textToBeHidden = document.getElementById('read-more-text');

    button.addEventListener('click', () => {
        buttonLess.classList.toggle('read-less-btn-hide');
        button.classList.remove('MoreBtnHidden');
        textToBeHidden.classList.toggle('read-more-text--hide');
    })

};

export default ReadLess;