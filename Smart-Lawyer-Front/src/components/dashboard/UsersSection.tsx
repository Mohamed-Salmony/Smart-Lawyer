import React, { useState } from 'react';
import { Users, Search, Filter, Trash2, CheckCircle, XCircle, Shield, Clock, UserCheck, UserX, UserPlus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const UsersSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { t } = useLanguage();

  const users = [
    {
      id: 1,
      name: t('users.sample.admin.name'),
      email: t('users.sample.admin.email'),
      role: 'admin',
      status: 'active',
      lastActive: '2024-02-20',
    },
    {
      id: 2,
      name: t('users.sample.lawyer.name'),
      email: t('users.sample.lawyer.email'),
      role: 'lawyer',
      status: 'active',
      lastActive: '2024-02-19',
    },
    {
      id: 3,
      name: t('users.sample.assistant.name'),
      email: t('users.sample.assistant.email'),
      role: 'assistant',
      status: 'inactive',
      lastActive: '2024-02-18',
    },
  ];

  const handleActivate = (userId: number) => {
    // Handle user activation
    console.log('Activating user:', userId);
  };

  const handleDeactivate = (userId: number) => {
    // Handle user deactivation
    console.log('Deactivating user:', userId);
  };

  const handleDelete = (userId: number) => {
    // Handle user deletion
    console.log('Deleting user:', userId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-darkgray force-gradient-gold-text';
      case 'inactive':
        return 'bg-darkgray force-gradient-gold-text';
      default:
        return 'bg-darkgray text-gray-300';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-darkgray force-gradient-gold-text';
      case 'lawyer':
        return 'bg-darkgray force-gradient-gold-text';
      case 'assistant':
        return 'bg-darkgray force-gradient-gold-text';
      default:
        return 'bg-darkgray text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold gradient-gold-text">{t('users.title')}</h1>
        <button className="inline-flex items-center px-4 py-2 gradient-gold text-black rounded-lg hover:gradient-gold-text transition-colors">
          <UserPlus className="w-5 h-5 mr-2" />
          {t('users.add')}
        </button>
      </div>

      <div className="bg-navy rounded-lg shadow-sm border border-darkgray">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder={t('users.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-darkgray border border-darkgray rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-gray-300"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-4 py-2 border border-darkgray rounded-lg hover:bg-darkgray transition-colors text-gray-300"
              >
                <Filter className="w-5 h-5 mr-2" />
                {t('users.filter.all')}
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mb-6 p-4 bg-darkgray rounded-lg">
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedFilter === 'all'
                      ? 'bg-gold text-black'
                      : 'bg-navy text-gray-300 hover:bg-darkgray'
                  }`}
                >
                  {t('users.filter.all')}
                </button>
                <button
                  onClick={() => setSelectedFilter('active')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedFilter === 'active'
                      ? 'bg-gold text-black'
                      : 'bg-navy text-gray-300 hover:bg-darkgray'
                  }`}
                >
                  {t('users.filter.active')}
                </button>
                <button
                  onClick={() => setSelectedFilter('inactive')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedFilter === 'inactive'
                      ? 'bg-gold text-black'
                      : 'bg-navy text-gray-300 hover:bg-darkgray'
                  }`}
                >
                  {t('users.filter.inactive')}
                </button>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-darkgray">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('users.table.name')}</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('users.table.email')}</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('users.table.role')}</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('users.table.status')}</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('users.table.lastActive')}</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-300">{t('users.table.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-darkgray hover:bg-darkgray">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 gradient-gold-text mr-2" />
                        <span className="text-sm text-gray-300">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-300">{user.email}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                        <Shield className="w-4 h-4 mr-1" />
                        <span>{t(`users.roles.${user.role}`)}</span>
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status === 'active' ? (
                          <CheckCircle className="w-4 h-4 mr-1" />
                        ) : (
                          <XCircle className="w-4 h-4 mr-1" />
                        )}
                        <span>{t(`users.status.${user.status}`)}</span>
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-300">{user.lastActive}</td>
                    <td className="py-3 px-4">
                      <div className="flex justify-end space-x-2">
                        {user.status === 'inactive' ? (
                          <button
                            onClick={() => handleActivate(user.id)}
                            className="p-1 gradient-gold-text hover:gradient-gold-text"
                            title={t('users.actions.activate')}
                          >
                            <CheckCircle className="w-5 h-5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleDeactivate(user.id)}
                            className="p-1 gradient-gold-text hover:gradient-gold-text"
                            title={t('users.actions.deactivate')}
                          >
                            <XCircle className="w-5 h-5" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="p-1 force-gradient-gold-text hover:force-gradient-gold-text"
                          title={t('users.actions.delete')}
                        >
                          <Trash2 className="w-5 h-5 force-gradient-gold-text" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersSection; 