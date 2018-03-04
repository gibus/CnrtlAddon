var option = {

    $response: null,

    showUpdatedMessage: status => {
        var me = option;
        var { $response } = me;

        if (status == 'success')
            $response.textContent = 'Your change has been saved.';
        else {
            $response.textContent = 'There is something wrong, please report to developer.';
        }
        $response.style.opacity = 1;
        setTimeout( () => {
            $response.style.opacity = 0;
        }, 2000);
    },

    init: () => {
        var me = option;
        me.$response = document.querySelector('.response');

        browser.storage.local.get("cnrtldicovector").then(item => {
          var cnrtldicovector = item.cnrtldicovector;
          var dom = document.querySelector('#cnrtldicovector');
          dom.querySelector(`[value=${cnrtldicovector}]`).selected = true;
        });

        document.querySelector('#cnrtldicovector').addEventListener('change', e => {
            var { value } = e.target;

            browser.storage.local.set({
              cnrtldicovector: value
            }).then( () => {
                me.showUpdatedMessage('success');
            });
        });
    }
};

window.onload = option.init;
