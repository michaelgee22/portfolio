import { FaTwitter, FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

export const recommendations = [
  {
    title: 'War of Art: Break Through the Blocks and Win Your Inner Creative Battles',
    author: 'Steven Pressfield',
    bookImg: '/images/awesome-books/michaelchan/thewarofart.jpg',
    bookUrl: 'https://www.goodreads.com/book/show/1319.The_War_of_Art',
    avatar: '/images/awesome-books/michaelchan/avatar.jpg',
    descPreview: [
      "This book is the only reason that I've produced anything.",
      'It\'s like a shot of adrenaline to the heart for anyone who believes they are smart, creative, and have good things to offer but "just haven\'t had a shot".',
      'This book is about shutting up, doing the work, and personifying the dark force of Resistance that presses back against your creative work.',
      "The War of Art hurts like hell to read. Once you've read it, you can't go back to..."
    ],
    description: [
      "This book is the only reason that I've produced anything.",
      'It\'s like a shot of adrenaline to the heart for anyone who believes they are smart, creative, and have good things to offer but "just haven\'t had a shot".',
      'This book is about shutting up, doing the work, and personifying the dark force of Resistance that presses back against your creative work.',
      'The War of Art hurts like hell to read. Once you\'ve read it, you can\'t go back to "just doing the dishes before starting" or "just replying to a few emails before diving in" because you know it\'s a trick!',
      'If you want to achieve your creative goals, read this and endure the pain.',
      "If you're pretty happy with your life as it is, stay away.",
      '- Michael Chan',
      'Quote From The Book :',
      "<quote>“ You know, Hitler wanted to be an artist. At eighteen he took his inheritance, seven hundred kronen, and moved to Vienna to live and study... Ever see one of his paintings? Neither have I. Resistance beat him. Call it overstatement but I'll say it anyway: it was easier for Hitler to start World War II than it was for him to face a blank square of canvas. ”"
    ],
    guest: 'Michael Chan',
    guestBio: 'Host of React Podcast',
    guestLinks: [
      { id: 'website', icon: FiExternalLink, href: 'https://chan.dev/posts/' },
      { id: 'twitter', icon: FaTwitter, href: 'https://twitter.com/chantastic' },
      { id: 'github', icon: FaGithub, href: 'https://github.com/chantastic' }
    ]
  }
]
