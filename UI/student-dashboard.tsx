import React, { useState, useEffect } from 'react';
import { 
  Home, FileText, Award, MessageSquare, User, Bell, 
  Upload, CheckCircle, Mail, LogOut, Search, Filter 
} from 'lucide-react';

// Mock data and initial states
const initialNotifications = [
  { id: 1, message: 'Your application is under review', time: '2 hours ago', read: false },
  { id: 2, message: 'Payment reminder for enrollment', time: '1 day ago', read: false },
  { id: 3, message: 'Certificate request processed', time: '3 days ago', read: true }
];

const programs = [
  'Bachelor of Science', 
  'Master of Business Administration', 
  'PhD in Computer Science', 
  'Professional Diploma'
];

const StudentDashboard = () => {
  // State Management
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showNotifications, setShowNotifications] = useState(false);
  const [applicationStep, setApplicationStep] = useState(0);
  const [applicationData, setApplicationData] = useState({
    personalInfo: {},
    educationInfo: {},
    programChoice: '',
    documents: []
  });
  const [tickets, setTickets] = useState([
    { 
      id: 'TKT-2023-001', 
      subject: 'Document Upload Issue', 
      status: 'Open', 
      date: '2023-03-15',
      messages: [
        { sender: 'You', text: 'I am having trouble uploading my degree certificate', time: '10:30 AM' },
        { sender: 'Support', text: 'Can you please clarify the specific error you are encountering?', time: '11:15 AM' }
      ]
    }
  ]);

  // Application Steps
  const applicationSteps = [
    'Personal Information',
    'Education Background',
    'Program Selection',
    'Document Upload',
    'Review & Submit'
  ];

  // Notification Handling
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    // Mark all notifications as read
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  // Application Progress Handling
  const nextApplicationStep = () => {
    if (applicationStep < applicationSteps.length - 1) {
      setApplicationStep(applicationStep + 1);
    }
  };

  const prevApplicationStep = () => {
    if (applicationStep > 0) {
      setApplicationStep(applicationStep - 1);
    }
  };

  // Document Upload Handler
  const handleDocumentUpload = (event) => {
    const files = Array.from(event.target.files);
    setApplicationData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files]
    }));
  };

  // Ticket Handling
  const sendTicketMessage = (ticketId, message) => {
    const updatedTickets = tickets.map(ticket => 
      ticket.id === ticketId 
        ? { 
            ...ticket, 
            messages: [...ticket.messages, { 
              sender: 'You', 
              text: message, 
              time: new Date().toLocaleTimeString() 
            }]
          } 
        : ticket
    );
    setTickets(updatedTickets);
  };

  // Render Application Form
  const renderApplicationForm = () => {
    switch(applicationStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-2 border rounded"
            />
            <input 
              type="date" 
              placeholder="Date of Birth" 
              className="w-full p-2 border rounded"
            />
            <select className="w-full p-2 border rounded">
              <option>Select Nationality</option>
              <option>Egyptian</option>
              <option>International</option>
            </select>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Education Background</h2>
            <input 
              type="text" 
              placeholder="Previous Degree" 
              className="w-full p-2 border rounded"
            />
            <input 
              type="text" 
              placeholder="Institution" 
              className="w-full p-2 border rounded"
            />
            <input 
              type="number" 
              placeholder="Graduation Year" 
              className="w-full p-2 border rounded"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Program Selection</h2>
            <select className="w-full p-2 border rounded">
              <option>Select Program</option>
              {programs.map((program, index) => (
                <option key={index} value={program}>{program}</option>
              ))}
            </select>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Document Upload</h2>
            <div className="border-2 border-dashed p-6 text-center">
              <input 
                type="file" 
                multiple 
                onChange={handleDocumentUpload}
                className="hidden"
                id="document-upload"
              />
              <label 
                htmlFor="document-upload" 
                className="cursor-pointer flex items-center justify-center space-x-2"
              >
                <Upload />
                <span>Upload Documents (Degree Certificate, Transcripts)</span>
              </label>
            </div>
            {applicationData.documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-100">
                <span>{doc.name}</span>
                <CheckCircle className="text-green-500" />
              </div>
            ))}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Review & Submit</h2>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold mb-2">Application Summary</h3>
              <p>Program: {applicationData.programChoice || 'Not Selected'}</p>
              <p>Documents Uploaded: {applicationData.documents.length}</p>
            </div>
            <button 
              className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
              onClick={() => alert('Application Submitted Successfully!')}
            >
              Submit Application
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-800 text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold">Student Portal</h1>
        </div>
        <nav className="mt-6">
          {[
            { name: 'Dashboard', icon: Home, tab: 'dashboard' },
            { name: 'Application', icon: FileText, tab: 'application' },
            { name: 'Certificates', icon: Award, tab: 'certificates' },
            { name: 'Support Tickets', icon: MessageSquare, tab: 'tickets' }
          ].map((item) => (
            <div 
              key={item.tab}
              className={`p-4 flex items-center cursor-pointer 
                ${activeTab === item.tab ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
              onClick={() => setActiveTab(item.tab)}
            >
              <item.icon size={20} />
              <span className="ml-4">{item.name}</span>
            </div>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full">
          <div className="p-4 flex items-center cursor-pointer hover:bg-indigo-700">
            <LogOut size={20} />
            <span className="ml-4">Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'application' && 'Application Process'}
            {activeTab === 'certificates' && 'Certificates'}
            {activeTab === 'tickets' && 'Support Tickets'}
          </h2>
          
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={toggleNotifications}
              className="p-2 rounded-full hover:bg-gray-100 relative"
            >
              <Bell size={20} />
              {notifications.filter(n => !n.read).length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg">
                <div className="p-3 bg-indigo-800 text-white">
                  <h3 className="text-sm font-medium">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`p-3 border-b ${!notification.read ? 'bg-blue-50' : ''}`}
                    >
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 overflow-y-auto">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-gray-500">Application Status</h3>
                    <p className="text-2xl font-bold">Under Review</p>
                  </div>
                  <FileText className="text-blue-500" />
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-gray-500">Payment Status</h3>
                    <p className="text-2xl font-bold">Pending</p>
                  </div>
                  <Award className="text-green-500" />
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-gray-500">Support Tickets</h3>
                    <p className="text-2xl font-bold">{tickets.length}</p>
                  </div>
                  <MessageSquare className="text-red-500" />
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-gray-500">Certificates</h3>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <Mail className="text-purple-500" />
                </div>
              </div>
            </div>
          )}

          {/* Application Process */}
          {activeTab === 'application' && (
            <div className="bg-white rounded-lg shadow p-6">
              {/* Progress Indicator */}
              <div className="flex justify-between mb-6">
                {applicationSteps.map((step, index) => (
                  <div 
                    key={step} 
                    className={`flex-1 text-center 
                      ${index <= applicationStep 
                        ? 'text-indigo-600 font-bold' 
                        : 'text-gray-400'}`}
                  >
                    {step}
                  </div>
                ))}
              </div>

              {/* Application Form */}
              <div className="mt-6">
                {renderApplicationForm()}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                {applicationStep > 0 && (
                  <button 
                    onClick={prevApplicationStep}
                    className="bg-gray-200 text-gray-800 p-2 rounded"
                  >
                    Previous
                  </button>
                )}
                {applicationStep < applicationSteps.length - 1 && (
                  <button 
                    onClick={nextApplicationStep}
                    className="bg-indigo-600 text-white p-2 rounded ml-auto"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Certificates */}
          {activeTab === 'certificates' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Certificates</h2>
              <div className="text-center text-gray-500">
                No certificates available at the moment.
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white p-2 rounded">
                Request New Certificate
              </button>
            </div>
          )}

          {/* Support Tickets */}
          {activeTab === 'tickets' && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Support Tickets</h2>
                <button className="bg-indigo-600 text-white p-2 rounded">
                  Create New Ticket
                </button>
              </div>
              {tickets.map((ticket) => (
                <div key={ticket.id} className="border p-4 mb-4 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">#{ticket.id}</h3>
                    <span 
                      className={`px-2 py-1 rounded-full text-xs 
                        ${ticket.status === 'Open' ? 'bg-red-100 text-red-800' : ''}
                        ${ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${ticket.status === 'Closed' ? 'bg-green-100 text-green-800' : ''}`}
                    >
                      {ticket.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{ticket.subject}</p>
                  <div className="bg-gray-50 p-3 rounded">
                    {ticket.messages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`mb-2 p-2 rounded 
                          ${message.sender === 'You' ? 'bg-indigo-100 text-right' : 'bg-gray-200'}`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs text-gray-500">{message.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="flex-1 p-2 border rounded-l"
                      id={`message-input-${ticket.id}`}
                    />
                    <button 
                      className="bg-indigo-600 text-white p-2 rounded-r"
                      onClick={() => {
                        const input = document.getElementById(`message-input-${ticket.id}`);
                        if (input && input.value.trim()) {
                          sendTicketMessage(ticket.id, input.value);
                          input.value = '';
                        }
                      }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              ))}
              {tickets.length === 0 && (
                <div className="text-center text-gray-500 p-4">
                  No support tickets found.
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;