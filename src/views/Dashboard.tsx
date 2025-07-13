import React from 'react';
import TransactionsTable from '../components/TransactionsTable';
import ChatPage from '../components/ChatPage';

const Dashboard = ({content}: {content: Array<any>}) => {    
    return (
        <div className="w-full py-10 flex flex-row max-md:flex-col gap-2 text-textDarkColor max-h-svh">
            <TransactionsTable data={content}/>
            <ChatPage sender={{}}/>
        </div>
    );
}

export default Dashboard;
