import React, { useEffect } from 'react';
import { useMercadoPago } from 'mercadopago-v2-react';

export default function Checkout() {
    const mercadopago = useMercadoPago('TEST-b38eba64-c8b9-4330-aa82-c3e0e29d9f66', {
        locale: 'es-AR'
    });

    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: 'YOUR_PREFERENCE_ID'
                },
                render: {
                    container: '.cho-container',
                    label: 'Pay',
                }
            })
        }
    }, [mercadopago])

    return (
        <div>
            <div class="cho-container" />
        </div>
    )
}