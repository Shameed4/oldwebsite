const activities = [
    {
        activity: 'AI Community at Stony Brook',
        role: 'President',
        description: 'This is the club that my friends and I co-founded together! We created it in the Fall and had our first meetings '
                + 'in the Spring semester 2022. Joining this club encouraged me to start my learning journey in AI, where I learned '
                + 'about libraries including TensorFlow, Numpy, Pandas, and Matplotlib, then passed that knowledge to our members '
                + 'by planning interactive events with slideshows and Jupyter notebooks.',
        date: 'Nov 2022 - Present',
        image: '/images/ai.jpg',
    },
    {
        activity: 'Stony Brook Computing Society',
        role: 'Secretary',
        description: 'This was my first club! As Secretary, I worked closely with the President and Vice President when doing club tasks.'
                + 'We planned club events and collaborations together, we interviewed and hired people to be club Representatives,'
                + 'and we organized e-board meeting agendas. I also maintained the email newsletter to keep people updated on'
                + 'upcoming events.',
        date: 'Oct 2022 - Present',
        image: '/images/sbcs.jpg',
    },
    {
        title: 'Teaching Assistant',
        role: 'Data Structures and Algorithms',
        description: 'Description for Role 3.',
        image: 'data:image/png;base64,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',
    },
  ];

export default function Main() {
    return (
    <div id="main">
        <div id="intro">
            <h2>Hi, I'm Sean!</h2>
            <p>This website is currently in progress!</p>
            <p>
                I'm studying computer science and applied mathematics at Stony Brook University. 
                Some of my hobbies include playing chess, tennis, running, and working out. 
                The clubs that I'm in include the AI Community at Stony Brook, which I am the President of,
                and the Stony Brook Computing Society, which I am the Secretary of. 
                I am also a TA for Data Structures and Algorithms.
            </p>
            <p>Hi!</p>
        </div>
        <div id="activities">
            {
            activities.map(({image, activity, role, description}) => {
                return (<div>
                    <h3>{activity}</h3>
                    <h4>{role}</h4>
                    <p>{description}</p>
                    {image && <img src={image}/>}
                </div>)
            })
            }
        </div>
    </div>
    )
}