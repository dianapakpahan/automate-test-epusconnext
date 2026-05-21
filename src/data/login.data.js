export const validUser = {
    phone: '081311223311',
    pin: '112233'
};

export const invalidUsers = [
    {
        phone: '081311223311',
        pin: '000000',
        error: 'PIN salah'
    },
    {
        phone: '081000000000',
        pin: '112233',
        error: 'Nomor tidak terdaftar'
    },
    {
        phone: '081',
        pin: '123456',
        error: 'Nomor tidak valid'
    }
];