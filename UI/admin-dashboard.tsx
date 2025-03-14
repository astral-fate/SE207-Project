import React, { useState } from 'react';
import { Bell, Home, User, FileText, CheckCircle, DollarSign, Award, MessageSquare, Settings, LogOut, Menu, X, Search, Filter, ChevronDown, Mail } from 'lucide-react';

const AdminDashboard = () => {
  // State management
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New enrollment application submitted', time: '10 min ago', read: false },
    { id: 2, message: 'New certificate request', time: '1 hour ago', read: false },
    { id: 3, message: 'New support ticket #1254', time: '3 hours ago', read: true },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Sample data
  const applications = [
    { id: 'APP-2023-001', name: 'Mohamed Ahmed', program: 'Master of Business', status: 'Pending Review', date: '2023-03-12' },
    { id: 'APP-2023-002', name: 'Sarah Wilson', program: 'PhD Computer Science', status: 'Documents Approved', date: '2023-03-11' },
    { id: 'APP-2023-003', name: 'Amir Hassan', program: 'Master of Engineering', status: 'Payment Pending', date: '2023-03-10' },
    { id: 'APP-2023-004', name: 'Fatima Ali', program: 'MBA', status: 'Documents Rejected', date: '2023-03-09' }
  ];
  
  const paidStudents = [
    { id: 'STU-2023-1001', name: 'Sarah Wilson', program: 'PhD Computer Science', paymentDate: '2023-03-13', amount: '1500 EGP', hasID: true },
    { id: 'STU-2023-1002', name: 'Omar Farooq', program: 'Master of Science', paymentDate: '2023-03-12', amount: '600 EGP', hasID: false },
    { id: 'STU-2023-1003', name: 'Jessica Chen', program: 'Master of Arts', paymentDate: '2023-03-11', amount: '1500 EGP', hasID: false }
  ];
  
  const certificateRequests = [
    { id: 'CERT-2023-001', studentId: 'STU-2023-0584', name: 'Ahmed Ibrahim', program: 'Bachelor of Science', requestDate: '2023-03-14', status: 'Processing' },
    { id: 'CERT-2023-002', studentId: 'STU-2023-0492', name: 'Layla Mohammed', program: 'Master of Arts', requestDate: '2023-03-13', status: 'Pending Payment' },
    { id: 'CERT-2023-003', studentId: 'STU-2023-0367', name: 'Michael Stevens', program: 'PhD Economics', requestDate: '2023-03-12', status: 'Ready for Pickup' }
  ];
  
  const supportTickets = [
    { id: 'TKT-2023-001', studentId: 'STU-2023-0584', name: 'Ahmed Ibrahim', subject: 'Problem with document upload', date: '2023-03-14', status: 'Open' },
    { id: 'TKT-2023-002', studentId: 'STU-2023-0721', name: 'Nour Mahmoud', subject: 'Payment confirmation not received', date: '2023-03-13', status: 'In Progress' },
    { id: 'TKT-2023-003', studentId: 'STU-2023-0492', name: 'Layla Mohammed', subject: 'Certificate request inquiry', date: '2023-03-11', status: 'Closed' }
  ];
  
  // Toggle active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Toggle notifications panel
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };
  
  // Get unread notification count
  const unreadCount = notifications.filter(n => !n.read).length;
  
  // Generate student ID
  const generateStudentID = (index) => {
    const newPaidStudents = [...paidStudents];
    newPaidStudents[index].hasID = true;
    // In a real app, we would make an API call here
    alert(`Student ID generated successfully for ${paidStudents[index].name}`);
  };
  
  // Process certificate
  const processCertificate = (id) => {
    // In a real app, we would make an API call here
    alert(`Certificate ${id} marked as ready for pickup`);
  };
  
  // Handle ticket status change
  const updateTicketStatus = (id, newStatus) => {
    // In a real app, we would make an API call here
    alert(`Ticket ${id} status updated to ${newStatus}`);
  };
  
  // Approve documents
  const approveDocuments = (id) => {
    alert(`Documents for application ${id} have been approved`);
  };
  
  // Reject documents
  const rejectDocuments = (id) => {
    alert(`Documents for application ${id} have been rejected. Student will be notified.`);
  };
  
  // Chat with student
  const openChat = (name) => {
    alert(`Opening chat with ${name}`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-indigo-800 text-white transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin Portal</h1>}
          <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-indigo-700">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="mt-6">
          <div 
            className={`p-4 flex items-center cursor-pointer ${activeTab === 'dashboard' ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
            onClick={() => handleTabChange('dashboard')}
          >
            <Home size={20} />
            {sidebarOpen && <span className="ml-4">Dashboard</span>}
          </div>
          <div 
            className={`p-4 flex items-center cursor-pointer ${activeTab === 'applications' ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
            onClick={() => handleTabChange('applications')}
          >
            <FileText size={20} />
            {sidebarOpen && <span className="ml-4">Applications</span>}
          </div>
          <div 
            className={`p-4 flex items-center cursor-pointer ${activeTab === 'enrollments' ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
            onClick={() => handleTabChange('enrollments')}
          >
            <CheckCircle size={20} />
            {sidebarOpen && <span className="ml-4">Enrollments</span>}
          </div>
          <div 
            className={`p-4 flex items-center cursor-pointer ${activeTab === 'certificates' ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
            onClick={() => handleTabChange('certificates')}
          >
            <Award size={20} />
            {sidebarOpen && <span className="ml-4">Certificates</span>}
          </div>
          <div 
            className={`p-4 flex items-center cursor-pointer ${activeTab === 'tickets' ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
            onClick={() => handleTabChange('tickets')}
          >
            <MessageSquare size={20} />
            {sidebarOpen && <span className="ml-4">Support Tickets</span>}
          </div>
          <div 
            className={`p-4 flex items-center cursor-pointer ${activeTab === 'settings' ? 'bg-indigo-900' : 'hover:bg-indigo-700'}`}
            onClick={() => handleTabChange('settings')}
          >
            <Settings size={20} />
            {sidebarOpen && <span className="ml-4">Settings</span>}
          </div>
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <div className="flex items-center cursor-pointer hover:bg-indigo-700 p-2 rounded">
            <LogOut size={20} />
            {sidebarOpen && <span className="ml-4">Logout</span>}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'applications' && 'Applications'}
                {activeTab === 'enrollments' && 'Student Enrollments'}
                {activeTab === 'certificates' && 'Certificate Requests'}
                {activeTab === 'tickets' && 'Support Tickets'}
                {activeTab === 'settings' && 'System Settings'}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={toggleNotifications}
                  className="p-2 rounded-full hover:bg-gray-100 relative"
                >
                  <Bell size={20} />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
                
                {/* Notifications Panel */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20">
                    <div className="p-3 bg-indigo-800 text-white flex items-center justify-between">
                      <h3 className="text-sm font-medium">Notifications</h3>
                      <button onClick={markAllAsRead} className="text-xs underline">Mark all as read</button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`p-3 border-b hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                        >
                          <p className="text-sm">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))}
                      {notifications.length === 0 && (
                        <div className="p-4 text-center text-gray-500">No new notifications</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                  AD
                </div>
                {sidebarOpen && <span className="font-medium">Admin</span>}
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-500 text-sm">New Applications</h3>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      <FileText size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-500 text-sm">Pending Payments</h3>
                      <p className="text-2xl font-bold">18</p>
                    </div>
                    <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                      <DollarSign size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-500 text-sm">Certificate Requests</h3>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <div className="p-3 rounded-full bg-green-100 text-green-600">
                      <Award size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-500 text-sm">Open Tickets</h3>
                      <p className="text-2xl font-bold">7</p>
                    </div>
                    <div className="p-3 rounded-full bg-red-100 text-red-600">
                      <MessageSquare size={20} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Recent Applications</h3>
                    <button 
                      onClick={() => handleTabChange('applications')}
                      className="text-sm text-indigo-600 hover:underline"
                    >
                      View All
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {applications.slice(0, 3).map((app) => (
                          <tr key={app.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 text-sm">{app.id}</td>
                            <td className="px-4 py-2 text-sm">{app.name}</td>
                            <td className="px-4 py-2 text-sm">{app.program}</td>
                            <td className="px-4 py-2 text-sm">
                              <span 
                                className={`px-2 py-1 rounded-full text-xs
                                  ${app.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-800' : ''}
                                  ${app.status === 'Documents Approved' ? 'bg-green-100 text-green-800' : ''}
                                  ${app.status === 'Payment Pending' ? 'bg-blue-100 text-blue-800' : ''}
                                  ${app.status === 'Documents Rejected' ? 'bg-red-100 text-red-800' : ''}
                                `}
                              >
                                {app.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Recent Support Tickets</h3>
                    <button 
                      onClick={() => handleTabChange('tickets')}
                      className="text-sm text-indigo-600 hover:underline"
                    >
                      View All
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {supportTickets.slice(0, 3).map((ticket) => (
                          <tr key={ticket.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 text-sm">{ticket.id}</td>
                            <td className="px-4 py-2 text-sm">{ticket.subject}</td>
                            <td className="px-4 py-2 text-sm">
                              <span 
                                className={`px-2 py-1 rounded-full text-xs
                                  ${ticket.status === 'Open' ? 'bg-red-100 text-red-800' : ''}
                                  ${ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : ''}
                                  ${ticket.status === 'Closed' ? 'bg-green-100 text-green-800' : ''}
                                `}
                              >
                                {ticket.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <div>
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-4 border-b">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-medium">Application Management</h3>
                    <div className="mt-3 md:mt-0 flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input 
                          type="text" 
                          placeholder="Search applications..." 
                          className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border rounded-md hover:bg-gray-50">
                        <Filter size={16} className="mr-1" />
                        <span>Filter</span>
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {applications.map((application) => (
                        <tr key={application.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{application.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.program}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span 
                              className={`px-2 py-1 rounded-full text-xs
                                ${application.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-800' : ''}
                                ${application.status === 'Documents Approved' ? 'bg-green-100 text-green-800' : ''}
                                ${application.status === 'Payment Pending' ? 'bg-blue-100 text-blue-800' : ''}
                                ${application.status === 'Documents Rejected' ? 'bg-red-100 text-red-800' : ''}
                              `}
                            >
                              {application.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <button 
                                onClick={() => approveDocuments(application.id)}
                                className="text-green-600 hover:text-green-800"
                              >
                                Approve
                              </button>
                              <button 
                                onClick={() => rejectDocuments(application.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                Reject
                              </button>
                              <button 
                                onClick={() => openChat(application.name)}
                                className="text-blue-600 hover:text-blue-800"
                              >
                                Message
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="px-6 py-3 flex items-center justify-between border-t">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> results
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border rounded-md bg-gray-100">Previous</button>
                    <button className="px-3 py-1 border rounded-md bg-indigo-600 text-white">Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Enrollments Tab */}
          {activeTab === 'enrollments' && (
            <div>
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-4 border-b">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-medium">Paid Applications - Generate Student IDs</h3>
                    <div className="mt-3 md:mt-0 flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input 
                          type="text" 
                          placeholder="Search students..." 
                          className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border rounded-md hover:bg-gray-50">
                        <Filter size={16} className="mr-1" />
                        <span>Filter</span>
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paidStudents.map((student, index) => (
                        <tr key={student.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.program}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.paymentDate}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span 
                              className={`px-2 py-1 rounded-full text-xs ${student.hasID ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                            >
                              {student.hasID ? 'ID Generated' : 'ID Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {!student.hasID ? (
                              <button 
                                onClick={() => generateStudentID(index)}
                                className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                              >
                                Generate ID
                              </button>
                            ) : (
                              <button 
                                className="px-3 py-1 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
                              >
                                ID Generated
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="px-6 py-3 flex items-center justify-between border-t">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> results
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border rounded-md bg-gray-100">Previous</button>
                    <button className="px-3 py-1 border rounded-md bg-indigo-600 text-white">Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div>
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-4 border-b">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-medium">Certificate Requests</h3>
                    <div className="mt-3 md:mt-0 flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input 
                          type="text" 
                          placeholder="Search requests..." 
                          className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border rounded-md hover:bg-gray-50">
                        <Filter size={16} className="mr-1" />
                        <span>Filter</span>
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {certificateRequests.map((request) => (
                        <tr key={request.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.studentId}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.program}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requestDate}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span 
                              className={`px-2 py-1 rounded-full text-xs
                                ${request.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : ''}
                                ${request.status === 'Pending Payment' ? 'bg-blue-100 text-blue-800' : ''}
                                ${request.status === 'Ready for Pickup' ? 'bg-green-100 text-green-800' : ''}
                              `}
                            >
                              {request.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {request.status !== 'Ready for Pickup' ? (
                              <button 
                                onClick={() => processCertificate(request.id)}
                                className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                              >
                                Process
                              </button>
                            ) : (
                              <button 
                                className="px-3 py-1 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
                              >
                                Processed
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="px-6 py-3 flex items-center justify-between border-t">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> results
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border rounded-md bg-gray-100">Previous</button>
                    <button className="px-3 py-1 border rounded-md bg-indigo-600 text-white">Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Tickets Tab */}
          {activeTab === 'tickets' && (
            <div>
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-4 border-b">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-medium">Support Tickets</h3>
                    <div className="mt-3 md:mt-0 flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input 
                          type="text" 
                          placeholder="Search tickets..." 
                          className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <button className="flex items-center px-3 py-2 border rounded-md hover:bg-gray-50">
                        <Filter size={16} className="mr-1" />
                        <span>Filter</span>
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {supportTickets.map((ticket) => (
                        <tr key={ticket.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.studentId}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.subject}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span 
                              className={`px-2 py-1 rounded-full text-xs
                                ${ticket.status === 'Open' ? 'bg-red-100 text-red-800' : ''}
                                ${ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : ''}
                                ${ticket.status === 'Closed' ? 'bg-green-100 text-green-800' : ''}
                              `}
                            >
                              {ticket.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <button 
                                onClick={() => openChat(ticket.name)}
                                className="text-blue-600 hover:text-blue-800"
                              >
                                <Mail size={16} />
                              </button>
                              <select 
                                onChange={(e) => updateTicketStatus(ticket.id, e.target.value)}
                                className="text-sm border rounded px-2 py-1"
                                defaultValue={ticket.status}
                              >
                                <option value="Open">Open</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="px-6 py-3 flex items-center justify-between border-t">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> results
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border rounded-md bg-gray-100">Previous</button>
                    <button className="px-3 py-1 border rounded-md bg-indigo-600 text-white">Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-medium">System Settings</h3>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-md font-medium mb-4">Notification Settings</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Email notifications</span>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input type="checkbox" id="toggle1" className="toggle-checkbox sr-only" defaultChecked />
                            <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm">SMS notifications</span>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input type="checkbox" id="toggle2" className="toggle-checkbox sr-only" defaultChecked />
                            <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Push notifications</span>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input type="checkbox" id="toggle3" className="toggle-checkbox sr-only" />
                            <label htmlFor="toggle3" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-md font-medium mb-4">Fee Settings</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Local Student Fee (EGP)</label>
                          <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue="600" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">International Student Fee (EGP)</label>
                          <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue="1500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Certificate Request Fee (EGP)</label>
                          <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue="200" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Save Settings</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;