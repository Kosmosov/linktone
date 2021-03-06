export class ChatPanelFakeDb
{
    public static contacts = [
        {
            'id'    : '5725a680b3249760ea21de52',
            'name'  : 'Игорь Лобанов',
            'avatar': 'assets/images/avatars/cache.jpg',
            'status': 'online',
            'mood'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            'unread': '3'
        },
        {
            'id'    : '5725a680606588342058356d',
            'name'  : 'Константин Чалых',
            'avatar': 'assets/images/avatars/chalykh.jpg',
            'status': 'do-not-disturb',
            'mood'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id'    : '5725a68009e20d0a9e9acf2a',
            'name'  : 'Дмитрий Бурдин',
            'avatar': 'assets/images/avatars/Barrera.jpg',
            'status': 'do-not-disturb',
            'mood'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id'    : '5725a6809fdd915739187ed5',
            'name'  : 'Кирилл Устинов',
            'avatar': 'assets/images/avatars/Blair.jpg',
            'status': 'offline',
            'mood'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            'unread': '3'
        },
        {
            'id'    : '5725a68007920cf75051da64',
            'name'  : '',
            'avatar': 'assets/images/avatars/Boyle.jpg',
            'status': 'Василий Горшков',
            'mood'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            'unread': '1'
        },
        {
            'id'    : '5725a68031fdbb1db2c1af47',
            'name'  : 'Владимир Губатов',
            'avatar': 'assets/images/avatars/Christy.jpg',
            'status': 'offline',
            'mood'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id'    : '5725a680bc670af746c435e2',
            'name'  : 'Никита Муравьев',
            'avatar': 'assets/images/avatars/Copeland.jpg',
            'status': 'online',
            'mood'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id'    : '5725a680e7eb988a58ddf303',
            'name'  : 'Алексей Зудин',
            'avatar': 'assets/images/avatars/Estes.jpg',
            'status': 'away',
            'mood'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            'id'    : '5725a680dcb077889f758961',
            'name'  : 'Федор Воскресенкий',
            'avatar': 'assets/images/avatars/Harper.jpg',
            'status': 'offline',
            'mood'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        }
    ];

    public static chats = [
        {
            'id'    : '1725a680b3249760ea21de52',
            'dialog': [
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'Quickly come to the meeting room 1B, we have a big server issue',
                    'time'   : '2017-03-22T08:54:28.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'I’m having breakfast right now, can’t you wait for 10 minutes?',
                    'time'   : '2017-03-22T08:55:28.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'I’m having breakfast right now, can’t you wait for 10 minutes?',
                    'time'   : '2017-03-22T08:55:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'We are losing money! Quick!',
                    'time'   : '2017-03-22T09:00:28.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
                    'time'   : '2017-03-22T09:02:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time'   : '2017-03-22T09:05:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'We are losing money! Quick!',
                    'time'   : '2017-03-22T09:15:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time'   : '2017-03-22T09:05:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'We are losing money! Quick!',
                    'time'   : '2017-03-22T09:15:28.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
                    'time'   : '2017-03-22T09:20:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time'   : '2017-03-22T09:22:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'We are losing money! Quick!',
                    'time'   : '2017-03-22T09:25:28.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
                    'time'   : '2017-03-22T09:27:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time'   : '2017-03-22T09:33:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time'   : '2017-03-22T09:33:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'We are losing money! Quick!',
                    'time'   : '2017-03-22T09:35:28.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
                    'time'   : '2017-03-22T09:45:28.299Z'
                },
                {
                    'who'    : '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time'   : '2017-03-22T10:00:28.299Z'
                }
            ]
        },
        {
            'id'    : '2725a680b8d240c011dd2243',
            'dialog': [
                {
                    'who'    : '5725a680606588342058356d',
                    'message': 'Quickly come to the meeting room 1B, we have a big server issue',
                    'time'   : '2017-04-22T01:00:00.299Z'
                },
                {
                    'who'    : '5725a6802d10e277a0f35724',
                    'message': 'I’m having breakfast right now, can’t you wait for 10 minutes?',
                    'time'   : '2017-04-22T01:05:00.299Z'
                },
                {
                    'who'    : '5725a680606588342058356d',
                    'message': 'We are losing money! Quick!',
                    'time'   : '2017-04-22T01:10:00.299Z'
                }
            ]
        },
        {
            'id'    : '3725a6809413bf8a0a5272b4',
            'dialog': [
                {
                    'who'    : '5725a68009e20d0a9e9acf2a',
                    'message': 'Quickly come to the meeting room 1B, we have a big server issue',
                    'time'   : '2017-04-22T02:10:00.299Z'
                }
            ]
        }
    ];

    public static user = [
        {
            'id'      : '5725a6802d10e277a0f35724',
            'name'    : 'John Doe',
            'avatar'  : 'assets/images/avatars/profile.jpg',
            'status'  : 'online',
            'mood'    : '',
            'chatList': [
                {
                    'chatId'         : '1725a680b3249760ea21de52',
                    'contactId'      : '5725a680b3249760ea21de52',
                    'lastMessageTime': '2017-06-12T02:10:18.931Z'
                },
                {
                    'chatId'         : '2725a680b8d240c011dd2243',
                    'contactId'      : '5725a680606588342058356d',
                    'lastMessageTime': '2017-02-18T10:30:18.931Z'
                },
                {
                    'chatId'         : '3725a6809413bf8a0a5272b4',
                    'contactId'      : '5725a68009e20d0a9e9acf2a',
                    'lastMessageTime': '2017-03-18T12:30:18.931Z'
                }
            ]
        }
    ];

}
