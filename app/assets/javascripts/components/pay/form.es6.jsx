class PayForm extends React.Component {
    constructor() {
        super()
    }

    render() {
        <div className="pay-form">
            <form action="charge.php" method="POST">
                <script
                    src="https://s.yimg.jp/images/wallet/fastpay/js/fastpay-v2-current.js" class="fastpay-button"
                    data-key="dj0zaiZpPUJEVlBEMTdkeGpReiZzPWNvbnN1bWVyc2VjcmV0Jng9ZTI-"
                    data-amount="666"
             ></script>
           </form>
        </div>
    }
}
