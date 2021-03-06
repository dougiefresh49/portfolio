const aboutTAMU = {
  banner: {
    img: '/photos/about/me/texas-am-stadium.png'
  },
  textCard: {
    type: 'detailed',
    title: 'Texas A&M University',
    desc: 'Fightin\' Texas Aggie class of 2014, whoop!',
    details: [
      {
        subtitle: 'Accomplishments',
        spacing: 'single',
        info: [
          'Major: Computer Science',
          'Minor: Business and Math',
          'Major Specific GPA: ~3.6',
          'Overall GPA: 3.2'
        ]
      },
      {
        subtitle: 'Clubs and Activities',
        spacing: 'single',
        info: [
          'MSC Town Hall',
          'Tennis',
          'Badminton',
          'Rock Climbing'
        ]
      }
    ]
  },
  imageCards: {
    type: 'column',
    images: [
      '/photos/about/me/aggie-game-with-chey-md.png',
      '/photos/about/me/family-of-aggies.png'
    ]
  }
}

const aboutWork = {
  banner: {
    img: '/photos/about/me/fidelity-yard.png'
  },
  textCard: {
    type: 'detailed',
    title: 'Fidelity Investments',
    desc: 'Online Trading software engineer since 2014',
    details: [
      {
        subtitle: 'Accomplishments',
        spacing: 'single',
        info: [
          'Tech lead for 2 high priority projects',
          'Helped bring in community standards for things like code and commit style',
          'Promoted within my first 12 months'
        ]
      },
      {
        subtitle: 'Awards',
        spacing: 'single',
        info: [
          'Excellence in Action August 2017 -- Own the Outcome',
          'Excellence in Action August 2016 -- Own the Outcome',
          'Excellence in Action July 2015 -- Teamwork and Collaboration'
        ]
      }
    ],
    button: {
      href: '/resume',
      text: 'Full Resume'
    }
  },
  imageCards: {
    type: 'column',
    images: [
      '/photos/about/me/fidelity-friends-md.png',
      '/photos/about/me/fidelity-team-lunch-md.png'
    ]
  }
}

const aboutMe = {
  banner: {
    img: '/photos/about/me/chey-doug-flowers.png'
  },
  textCard: {
    type: 'detailed',
    title: 'A Little About Me',
    desc: 'Howdy! I\'m Doug.',
    details: [
      {
        subtitle: 'Who I Am',
        spacing: 'single',
        info: [
          'I\'m  a big hearted, goofy guy who loves to learn, compete and most importantly, smile.',
          'Click through and find out more about my family, dogs, and what I do for fun!'
        ]
      },
      {
        subtitle: 'What I Do',
        spacing: 'single',
        info: [
          'I am a software engineer by trade and a dreamer at heart.',
          'I love to invent, imagine and create anything from household doodads to complex software applications'
        ]
      },
      {
        subtitle: 'What Can I Do For You?',
        spacing: 'single',
        info: [
          'You name it, I can make it happen',
          'Whether it\'s a mobile app, voice app, or website'
        ]
      }
    ],
    button: {
      href: '/contact',
      text: 'Contact Me'
    }
  },

  imageCards: {
    type: 'column',
    images: [
      '/photos/about/me/doug-dogs-cards-md.png',
      '/photos/about/chey-doug-ride.png',
      '/photos/about/me/doug-tmnt.png'
    ]
  }
}

export const AboutMeClusters = [
  aboutMe,
  aboutTAMU,
  aboutWork
]
