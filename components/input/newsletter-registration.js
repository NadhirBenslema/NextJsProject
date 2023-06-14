import { useRef,useContext } from 'react';
import styles from './newsletter-registration.module.css';
import NotificationContext from '@/store/notification-context';

function NewsletterRegistration() {
    const emailInputRef=useRef();
    const notificationctx = useContext(NotificationContext);
  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail=emailInputRef.current.value;
    notificationctx.showNotification({
      title:'Signing Up ...',
      message:'Registering for newsletter',
      status:'pending'
    });

    fetch('/api/newsletter', {
        method:'POST',
        body:JSON.stringify({email:enteredEmail}),
        headers:{
            'Content-Type':'application/json',
        },
    }).then(response => {
      if(response.ok){
        return response.json();
      }
      response.json().then(data=>{
        throw new Error(data.message || 'something went wrong!');
      });
    })
    .then(data =>{
      notificationctx.showNotification({
        title:'Success!',
        message:'Successfully registered for newsletter',
        status:'success'
      });

    })
    .catch(error =>{
      notificationctx.showNotification({
        title:'Error!',
        message:error.message || 'Something went wrong',
        status:'error'
      });

    });
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;