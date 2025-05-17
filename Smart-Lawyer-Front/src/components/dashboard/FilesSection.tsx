import React, { useState } from 'react';
import { FileText, Upload, Search, Filter, Download, Trash2, CheckCircle, XCircle, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FilesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { t } = useLanguage();

  const files = [
    {
      id: 1,
      name: t('files.sample.contractReview.name'),
      type: 'PDF',
      size: '2.4 MB',
      uploadedBy: t('files.sample.contractReview.uploadedBy'),
      status: 'approved',
      date: '2024-02-20',
    },
    {
      id: 2,
      name: t('files.sample.legalBrief.name'),
      type: 'DOCX',
      size: '1.8 MB',
      uploadedBy: t('files.sample.legalBrief.uploadedBy'),
      status: 'pending',
      date: '2024-02-19',
    },
    {
      id: 3,
      name: t('files.sample.caseNotes.name'),
      type: 'PDF',
      size: '3.2 MB',
      uploadedBy: t('files.sample.caseNotes.uploadedBy'),
      status: 'rejected',
      date: '2024-02-18',
    },
  ];

  const handleApprove = (fileId: number) => {
    // Handle file approval
    console.log('Approving file:', fileId);
  };

  const handleReject = (fileId: number) => {
    // Handle file rejection
    console.log('Rejecting file:', fileId);
  };

  const handleDelete = (fileId: number) => {
    // Handle file deletion
    console.log('Deleting file:', fileId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-darkgray force-gradient-gold-text';
      case 'pending':
        return 'bg-darkgray force-gradient-gold-text';
      case 'rejected':
        return 'bg-darkgray force-gradient-gold-text';
      default:
        return 'bg-darkgray text-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold gradient-gold-text">{t('files.title')}</h1>
        <button className="inline-flex items-center px-4 py-2 gradient-gold text-black rounded-lg hover:gradient-gold transition-colors">
          <Upload className="w-5 h-5 mr-2" />
          {t('files.upload')}
        </button>
      </div>

      <div className="bg-navy rounded-lg shadow-sm border border-darkgray">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder={t('files.search.placeholder')}
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
                {t('files.filter.all')}
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
                  {t('files.filter.all')}
                </button>
                <button
                  onClick={() => setSelectedFilter('approved')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedFilter === 'approved'
                      ? 'bg-gold text-black'
                      : 'bg-navy text-gray-300 hover:bg-darkgray'
                  }`}
                >
                  {t('files.filter.approved')}
                </button>
                <button
                  onClick={() => setSelectedFilter('pending')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedFilter === 'pending'
                      ? 'bg-gold text-black'
                      : 'bg-navy text-gray-300 hover:bg-darkgray'
                  }`}
                >
                  {t('files.filter.pending')}
                </button>
                <button
                  onClick={() => setSelectedFilter('rejected')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedFilter === 'rejected'
                      ? 'bg-gold text-black'
                      : 'bg-navy text-gray-300 hover:bg-darkgray'
                  }`}
                >
                  {t('files.filter.rejected')}
                </button>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-darkgray">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('files.table.name')}</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('files.table.type')}</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('files.table.size')}</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('files.table.uploadedBy')}</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('files.table.status')}</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">{t('files.table.date')}</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-300">{t('files.table.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file) => (
                  <tr key={file.id} className="border-b border-darkgray hover:bg-darkgray">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 gradient-gold-text mr-2" />
                        <span className="text-sm text-gray-300">{file.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-300">{file.type}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{file.size}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{file.uploadedBy}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(file.status)}`}>
                        {getStatusIcon(file.status)}
                        <span className="ml-1">{t(`files.status.${file.status}`)}</span>
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-300">{file.date}</td>
                    <td className="py-3 px-4">
                      <div className="flex justify-end space-x-2">
                        {file.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(file.id)}
                              className="p-1 gradient-gold-text hover:gradient-gold-text"
                              title={t('files.actions.approve')}
                            >
                              <CheckCircle className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleReject(file.id)}
                              className="p-1 gradient-gold-text hover:gradient-gold-text"
                              title={t('files.actions.reject')}
                            >
                              <XCircle className="w-5 h-5" />
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => handleDelete(file.id)}
                          className="p-1 force-gradient-gold-text hover:force-gradient-gold-text"
                          title={t('files.actions.delete')}
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

export default FilesSection; 