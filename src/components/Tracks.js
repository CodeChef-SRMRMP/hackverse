import React, { useState } from 'react';
import { Modal } from 'antd';

const tracks = [
  {
    name: 'Healthcare',
    desc: `Health care is the practice of providing medical treatment and services to individuals who are sick, injured, or in need of preventive care. It encompasses a wide range of services, including primary care, emergency care, specialty care, and public health services.

    Health care is a critical industry for promoting individual and public health, as well as economic growth and social well-being. It is also an industry facing significant challenges, including rising costs, access and equity issues, and the need to address chronic diseases and mental health.
    
    Efforts are being made to address these challenges, through initiatives such as health care reform, telehealth and virtual care, and personalized medicine. There is also a growing emphasis on preventive care, which seeks to address health issues before they become more serious.
    
    Overall, health care is an essential industry that plays a critical role in our lives and in the health of our communities. It is important that we continue to invest in and support this industry, while also addressing the challenges it faces and ensuring equitable access to care for all individuals.
    Blockchain can be used in healthcare to securely store and share patient data, track pharmaceutical supply chains, and streamline insurance claims processing.`,
  },
  {
    name: 'Agriculture',
    desc: `Agriculture is the practice of cultivating crops and raising animals for food, fuel, and other products. It is one of the oldest and most important human activities, and it remains a critical industry for global food security and economic development.

    Agriculture has undergone significant changes in recent decades, with modern farming techniques and technology enabling farmers to produce more food with fewer resources. However, these changes have also led to environmental challenges such as soil degradation, water pollution, and greenhouse gas emissions.
    
    To address these challenges, there has been a growing movement towards sustainable agriculture, which seeks to balance economic growth with environmental and social considerations. This includes practices such as conservation agriculture, organic farming, and agroforestry, which promote biodiversity, reduce waste and pollution, and improve soil health.
    
    Efforts are also being made to promote equitable access to food and support small-scale farmers in developing countries, who often face significant challenges such as lack of resources, access to markets, and climate change.
    
    Overall, agriculture plays a vital role in our lives and in the health of our planet, and it is essential that we continue to work towards a sustainable and equitable food system that benefits everyone.
    Blockchain can enable the traceability and transparency of agricultural products, from farm to table, facilitating fair trade, supply chain management, and food safety, while enhancing efficiency and accountability.`,
  },
  {
    name: 'Environment',
    desc: `The environment refers to the natural world and the complex web of living and non-living things that make up our planet. It encompasses the air we breathe, the water we drink, and the land that sustains us, as well as the diverse range of species that share our planet.

    The health of the environment is critical to our own health and well-being, as it provides us with the resources we need to survive and thrive. However, human activities such as industrialization, deforestation, and pollution have had a significant impact on the environment, leading to the loss of biodiversity, climate change, and other environmental challenges.
    
    To address these challenges, there has been a growing movement towards sustainable development, which seeks to promote economic growth while also protecting the environment and promoting social well-being. This includes initiatives such as renewable energy, sustainable agriculture, and green transportation, as well as efforts to reduce waste and promote recycling.
    
    Overall, it is essential that we work together to protect and preserve the environment for future generations, while also ensuring that we are able to meet our own needs and aspirations in a sustainable way.
    Blockchain can enable the creation of decentralized and transparent systems for environmental activities, such as carbon trading, renewable energy, and sustainable supply chain management, promoting accountability, efficiency, and trust.`,
  },
  {
    name: 'defi',
    desc: `DeFi, short for "Decentralized Finance," is a fast-growing sector in the cryptocurrency and blockchain world. Unlike traditional finance, which relies on centralized intermediaries like banks and financial institutions, DeFi protocols are built on decentralized networks like Ethereum, allowing for trustless and permissionless financial transactions.

    DeFi applications can range from decentralized exchanges, lending platforms, prediction markets, and more. They enable users to interact with financial services without intermediaries, and offer benefits such as lower fees, faster transactions, and increased transparency.
    
    One of the key features of DeFi is the use of smart contracts, which are self-executing agreements that automate complex financial transactions without the need for human intervention. These smart contracts are programmed to execute specific actions based on predefined conditions, ensuring that transactions are processed automatically and securely.
    
    Overall, DeFi is a rapidly evolving field that is changing the way people access and use financial services. Its decentralized nature and innovative technology have the potential to disrupt traditional finance and create new opportunities for financial inclusion and economic growth.
    Blockchain enables decentralized finance (DeFi) applications that offer trustless financial services, such as lending, trading, and investment, with transparent and auditable transactions, removing the need for intermediaries.`,
  },
  {
    name: 'NFT',
    desc: `NFTs, or non-fungible tokens, are unique digital assets that are stored on a blockchain. Unlike traditional cryptocurrencies, which are fungible and can be exchanged for identical units, each NFT is one-of-a-kind and has its own unique value. This is because NFTs are typically used to represent digital works of art, music, videos, or other creative content, and each piece of content is unique.

    NFTs have become increasingly popular in recent years, particularly in the art world, where they are being used to sell digital artwork for millions of dollars. The use of NFTs provides artists with a way to authenticate their work, protect their intellectual property rights, and potentially earn significant amounts of money.
    
    However, the use of NFTs has also sparked controversy and debate, particularly around the environmental impact of the energy-intensive blockchain technology used to create and trade them. Additionally, some critics argue that the hype around NFTs is a bubble that will eventually burst, leaving many investors with worthless digital assets.
    
    Blockchain is used to verify ownership and authenticity of unique digital assets, such as NFTs, through a decentralized and immutable ledger, enabling secure and transparent transactions.`,
  },
  {
    name: 'Blockchain',
    desc: `Consideration towards the upscale of the technology is in the 21st century it seems as we step one foot forward the previous step falls off, that is the previous set of technology is degraded and falls off due to the new advancements. Coming towards the recent times the use of blockchain has taken these advancement to a next level as it not only create new opportunities but try to keep old tech advanceing by solving the minutes of the lags.
    A blockchain platform is a share digital uger that allows us to record transaction and share information securely, tamper resistant. Aur distributed network of computers maintains the register and each transaction is verified by consensus among the network participants.
    Blockchain technology is in short used for creating secure and transparent systems in industries such as cryptocurrencies, supply chain management, identity verification, voting systems, smart contracts, and decentralized applications.`,
  },
  {
    name: 'AI',
    desc: `AI, short for "Artificial Intelligence," refers to the ability of machines to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making. AI technology involves the development of algorithms and computer programs that can mimic human cognitive functions, enabling machines to perform complex tasks and adapt to new situations.

    There are several types of AI, including rule-based systems, machine learning, and deep learning. Rule-based systems use a set of predefined rules to make decisions or take actions, while machine learning algorithms can learn from data without being explicitly programmed. Deep learning is a subset of machine learning that uses neural networks to process vast amounts of data and improve the accuracy of predictions and decision-making.
    
    AI has numerous applications in various fields, such as healthcare, finance, transportation, and entertainment. It has the potential to revolutionize the way we live and work, from personalized medicine to self-driving cars. However, as with any technology, there are also concerns about the potential misuse of AI, such as the creation of biased algorithms or the replacement of human workers with machines.
    Blockchain can be used in AI to create decentralized, transparent systems for data sharing, collaboration, and governance, enabling secure and trustworthy development of AI applications.`,
  },
  {
    name: 'metaverse',
    desc: `The metaverse is a concept that refers to a virtual universe where users can interact with each other and with digital objects in a fully immersive and interactive environment. It is essentially a virtual reality version of the internet, where users can enter and experience a virtual world that is similar to the real world in many ways.

    The metaverse is still in its early stages, but it has the potential to revolutionize the way we work, learn, and socialize. In the metaverse, users can create their own avatars, build their own virtual environments, and engage in a wide range of activities, from shopping and gaming to attending virtual conferences and concerts.
    
    Some experts believe that the metaverse will become the next major platform for social media and e-commerce, while others see it as a potential solution to many of the problems facing our physical world, such as climate change and social inequality.
    
    However, the development of the metaverse also raises a number of important questions around privacy, security, and ethics. As the metaverse continues to evolve, it will be important to ensure that it is designed and governed in a way that promotes the well-being of its users and the broader society.
    Blockchain can be used to create a decentralized and secure infrastructure for the metaverse, enabling ownership of digital assets, verifiable identities, and transparent transactions within virtual worlds.`,
  },
  {
    name: 'dev tools',
    desc: `Development tools, or dev tools, are software applications designed to help software developers create, debug, and test their code. They include a wide range of tools, such as integrated development environments (IDEs), text editors, code linters, version control systems, and testing frameworks.

    IDEs are some of the most commonly used dev tools, as they provide developers with a comprehensive set of tools to write, debug, and test their code all in one place. Popular IDEs include Visual Studio Code, Eclipse, and IntelliJ IDEA.
    
    Text editors, such as Atom and Sublime Text, are also popular among developers, as they are lightweight and easy to use. Code linters, such as ESLint and Pylint, help developers identify and fix errors and inconsistencies in their code.
    
    Version control systems, such as Git and SVN, allow developers to track changes to their code and collaborate with others on projects. Testing frameworks, such as JUnit and Selenium, enable developers to automate testing and ensure that their code is functioning properly.
    
    Overall, dev tools are essential for software development, as they help developers be more productive and efficient, and ensure that their code is of high quality and performs as expected.
    Blockchain-based developer tools can facilitate the creation of decentralized applications (dApps) with secure, transparent and tamper-proof data storage, enabling the development of innovative and trustless solutions.`,
  },
  {
    name: 'open innovation',
    desc: `Open innovation is a collaborative approach to innovation that involves sharing ideas, resources, and expertise with external partners, such as customers, suppliers, and other stakeholders. Rather than relying solely on internal research and development, open innovation encourages organizations to tap into the knowledge and expertise of a broader network of collaborators to drive innovation.

    One of the key benefits of open innovation is that it allows organizations to access a wider range of ideas and perspectives, potentially leading to more innovative solutions. It can also help to reduce costs and accelerate time-to-market by leveraging external resources and expertise.
    
    However, open innovation also presents some challenges, such as managing intellectual property rights and protecting confidential information. Effective communication and collaboration with external partners is also critical to ensuring the success of open innovation initiatives.
    
    Overall, open innovation is a valuable approach to driving innovation and can be particularly beneficial in today's fast-paced and interconnected business environment. By leveraging external resources and expertise, organizations can develop more innovative solutions and remain competitive in their respective markets.
    Blockchain can enable the creation of decentralized and incentivized platforms for open innovation, such as hackathons and crowdsourcing, facilitating collaboration, transparency, and fair rewards for contributors.`,
  },
];

const Tracks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState('');
  return (
    <div className="m-10 mx-5 md:mx-10 lg:mx-20">
      <h1 className="dark:text-white text-5xl text-center">Tracks</h1>
      <div className="bg-black/60 mt-5 p-10 backdrop-blur-xl px-10 lg:px-20">
        <div className="flex flex-wrap gap-5 items-end justify-center md:justify-between lg:justify-evenly rounded-md text-white">
          {tracks?.map(({ name, desc }, index) => {
            return (
              <h1
                onClick={() => {
                  setIsModalOpen(true);
                  setDescription(desc);
                }}
                key={index}
                className="hover:bg-yellow-600 cursor-pointer border-2 text-center px-3 py-2 text-4xl rounded-xl w-full md:w-1/3 border-white">
                {name}
              </h1>
            );
          })}
        </div>
        <h1 className="w-full md:w-2/3 mx-auto hover:bg-transparent hover:text-white border-2 border-black hover:border-white hover:animate-none bg-yellow-600 mt-10 px-4 py-2 rounded-lg text-4xl cursor-pointer shadow-black shadow-xl animate-pulse text-center">
          Sponsor Track
        </h1>
      </div>
      <Modal
        title="Description"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        width={1000}>
        <p className="font-light text-lg">{description}</p>
      </Modal>
    </div>
  );
};

export default Tracks;
