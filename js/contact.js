$(document).ready(() => {
    $('.drop').slideUp();
    $('.appear').fadeOut();
    $('.msg-after-submit').hide();

    const headerAnimation = () => {
        $('.drop').slideDown(2000);
        $('.appear').fadeIn(3000);

        console.log('calling the headerAnimation function.')
    };
    
    headerAnimation();

    //Handling the submit button
    const submitBtn = $('#submit-button');

    submitBtn.on('click', () => {
        $('.msg-after-submit').show();        

        console.log("Submit button clicked");        
    });
    //Handling the submit button end
});

























 // const responseMsg = $('.submit-response');
// responseMsg.css('display', 'none');

// const contactForm = $('.contact-form');
       
        // responseMsg.css({
        //     display: 'unset',
        //     backgroundColor: 'lightgrey',
        //     border: '2px solid lightblue',
        //     width: '50%',
        //     margin: '10px auto',
        //     borderRadius: '10px',
        //     position: 'relative',
        //     bottom: '500px'
        // }); 
        // responseMsg.addClass      
        // contactForm.css('visibility', 'hidden');