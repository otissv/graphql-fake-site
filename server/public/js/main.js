(function () {
  function onReady (fn) {
    var d = document;
    (d.readyState === 'loading') 
      ? d.addEventListener('DOMContentLoaded', fn) 
      : fn();
  }

  function showServerResponse ({ result, approval }) {
    const user = approval.user;
    const approvalElement = document.querySelector('.Approval');
    const responseElement = document.querySelector('.Response');
    const responseTitleElement = document.querySelector('.Response-title');
    const responseMessageElement = document.querySelector('.Response-message');
    
    let title;
    let message;

    if (result) {
      title = 'Thank You';
      message = `Your response has been sent to<br/>${user.firstName} ${user.lastName}.`;
      
    } else {
      title = 'Processing Error';
      message = 'There was an error processing your request.<br/>Please try again later.';
    }

    responseTitleElement.innerHTML = title;
    responseMessageElement.innerHTML = message;
    approvalElement.style.display = 'none';
    responseElement.style.display = 'block';
  }


  function saveHoliday ({ status, approval }) {    
    const url = approval.url;

    const config = {
      url: `http://localhost:8000/temp-approvals/${url}`,
      method: 'POST',
      options: {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    };

    const data = {
      status,
      id: approval.id
    };

    return axios(Object.assign({}, config, { data: data }));
  }

  function handleOnClick (e) {
    var approval = window.loop.approval;
    var status = e.target.dataset.status;

    saveHoliday({ status, approval })
      .then(response => {
        if (response.data.message && response.data.message.error) {
          showServerResponse({ approval, result: false });

        } else {
          showServerResponse({ approval, result: true });
        }
      });
  }

  function run (loop) {
    onReady(function () {
      const buttons = document.querySelectorAll('.uk-button ');

      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleOnClick);
      }
    });
  }

  run();
})();
