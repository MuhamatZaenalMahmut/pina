import { Icons } from '@assets';

module.exports = {
    income_cat:[
        {
            icon: Icons.bonus,
            name: 'Bonus'
        },
        {
            icon: Icons.salary,
            name: 'Gaji'
        },
        {
            icon: Icons.invest,
            name: 'Investasi'
        },
        {
            icon: Icons.freelance,
            name: 'Freelance'
        },
        {
            icon: Icons.more,
            name: 'Lainnya'
        }
    ],
    outcome_cat:[
        {
            icon: Icons.dollar,
            name: 'Makan dan Minuman'
        },
        {
            icon: Icons.dollar,
            name: 'Belanja Bulanan'
        },
        {
            icon: Icons.dollar,
            name: 'Tagihan'
        },
        {
            icon: Icons.dollar,
            name: 'Investasi'
        },
        {
            icon: Icons.dollar,
            name: 'Kesehatan'
        },
        {
            icon: Icons.dollar,
            name: 'Transportasi'
        },
        {
            icon: Icons.dollar,
            name: 'Hiburan'
        },
        {
            icon: Icons.dollar,
            name: 'Liburan'
        },
        {
            icon: Icons.dollar,
            name: 'Lainnya'
        }
    ],
    source:[
        {
            icon: Icons.cash,
            name: 'Cash'
        },
        {
            icon: Icons.bank,
            name: 'Bank'
        },
        {
            icon: Icons.ewallet,
            name: 'E-Wallet'
        },
        {
            icon: Icons.credit,
            name: 'Credit Card'
        },
    ],
    detail:{
        name: 'Food & Dining',
        allocation: 4500000,
        used: 1300000,
        history: [
            {
                date:'2022-09-30T08:20:00',
                total: 1300500,
                detail: [
                    {
                        name:'Burger King Waru',
                        note:'Input Manul',
                        amount: 100000
                    },
                    {
                        name:'KFC Manyar',
                        note:'BCA - 3848',
                        amount: 1000000
                    },
                    {
                        name:'Warteg Pak Bogang',
                        note:'Input Manul',
                        amount: 100000
                    },
                    {
                        name:'A&W Tol KM25',
                        note:'Input Manul',
                        amount: 100000
                    },
                ]
            },
            {
                date:'2022-09-28T08:20:00',
                total: 1300500,
                detail: [
                    {
                        name:'Burger King Waru',
                        note:'Input Manul',
                        amount: 100000
                    },
                    {
                        name:'KFC Manyar',
                        note:'BCA - 3848',
                        amount: 1000000
                    },
                    {
                        name:'Warteg Pak Bogang',
                        note:'Input Manul',
                        amount: 100000
                    },
                    {
                        name:'A&W Tol KM25',
                        note:'Input Manul',
                        amount: 100000
                    },
                ]
            }
        ]
    }
}