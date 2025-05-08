import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Dashboard Menu
    'dashboard.title': 'Dashboard',
    'dashboard.summary': 'Dashboard Summary',
    'dashboard.files': 'Files',
    'dashboard.analytics': 'Analytics',
    'dashboard.users': 'Users',

    // Summary Section
    'summary.totalFiles': 'Total Files',
    'summary.pendingApproval': 'Pending Approval',
    'summary.recentUploads': 'Recent Uploads',
    'summary.userActivity': 'User Activity',
    'summary.status.pending': 'Pending',
    'summary.status.approved': 'Approved',
    'summary.status.rejected': 'Rejected',
    'summary.recentFiles.contractReview': 'Contract Review',
    'summary.recentFiles.legalBrief': 'Legal Brief',
    'summary.recentFiles.caseNotes': 'Case Notes',
    'summary.timeAgo.2hours': '2 hours ago',
    'summary.timeAgo.4hours': '4 hours ago',
    'summary.timeAgo.1day': '1 day ago',

    // Files Section
    'files.title': 'Files',
    'files.upload': 'Upload File',
    'files.search.placeholder': 'Search files...',
    'files.filter.all': 'All',
    'files.filter.pending': 'Pending',
    'files.filter.approved': 'Approved',
    'files.filter.rejected': 'Rejected',
    'files.table.name': 'Name',
    'files.table.type': 'Type',
    'files.table.size': 'Size',
    'files.table.uploadedBy': 'Uploaded By',
    'files.table.status': 'Status',
    'files.table.date': 'Date',
    'files.table.actions': 'Actions',
    'files.status.approved': 'Approved',
    'files.status.pending': 'Pending',
    'files.status.rejected': 'Rejected',
    'files.actions.approve': 'Approve',
    'files.actions.reject': 'Reject',
    'files.actions.delete': 'Delete',
    'files.sample.contractReview.name': 'Contract Review.pdf',
    'files.sample.contractReview.uploadedBy': 'John Doe',
    'files.sample.legalBrief.name': 'Legal Brief.docx',
    'files.sample.legalBrief.uploadedBy': 'Jane Smith',
    'files.sample.caseNotes.name': 'Case Notes.pdf',
    'files.sample.caseNotes.uploadedBy': 'Mike Johnson',

    // Users Section
    'users.title': 'Users',
    'users.search.placeholder': 'Search users...',
    'users.filter.all': 'All',
    'users.filter.active': 'Active',
    'users.filter.inactive': 'Inactive',
    'users.filter.pending': 'Pending',
    'users.table.name': 'Name',
    'users.table.email': 'Email',
    'users.table.role': 'Role',
    'users.table.status': 'Status',
    'users.table.lastActive': 'Last Active',
    'users.table.actions': 'Actions',
    'users.roles.admin': 'Admin',
    'users.roles.user': 'User',
    'users.status.active': 'Active',
    'users.status.inactive': 'Inactive',
    'users.status.pending': 'Pending',
    'users.actions.activate': 'Activate',
    'users.actions.deactivate': 'Deactivate',
    'users.actions.delete': 'Delete',
    'users.sample.admin.name': 'John Doe',
    'users.sample.admin.email': 'john@example.com',
    'users.sample.user1.name': 'Jane Smith',
    'users.sample.user1.email': 'jane@example.com',
    'users.sample.user2.name': 'Mike Johnson',
    'users.sample.user2.email': 'mike@example.com',

    // Analytics Section
    'analytics.title': 'Analytics',
    'analytics.totalUploads': 'Total Uploads',
    'analytics.activeUsers': 'Active Users',
    'analytics.approvedFiles': 'Approved Files',
    'analytics.pendingApprovals': 'Pending Approvals',
    'analytics.fromLastMonth': 'from last month',
    'analytics.uploadTrends': 'Upload Trends',
    'analytics.userStats': 'User Statistics',
    'analytics.uploadStats': 'Upload Statistics',
    'analytics.chartPlaceholder': 'Chart will be displayed here',
    'analytics.recent.contractAnalysis.title': 'Contract Analysis Q1 2024',
    'analytics.recent.contractAnalysis.createdBy': 'John Doe',
    'analytics.recent.contractAnalysis.type': 'Contract Analysis',
    'analytics.recent.contractAnalysis.details': 'Analysis of all contracts for Q1 2024',
    'analytics.recent.documentReview.title': 'Legal Document Review',
    'analytics.recent.documentReview.createdBy': 'Jane Smith',
    'analytics.recent.documentReview.type': 'Document Review',
    'analytics.recent.documentReview.details': 'Review of legal documents for Project X',
  },
  ar: {
    // Dashboard Menu
    'dashboard.title': 'لوحة التحكم',
    'dashboard.summary': 'ملخص لوحة التحكم',
    'dashboard.files': 'الملفات',
    'dashboard.analytics': 'التحليلات',
    'dashboard.users': 'المستخدمين',

    // Summary Section
    'summary.totalFiles': 'إجمالي الملفات',
    'summary.pendingApproval': 'في انتظار الموافقة',
    'summary.recentUploads': 'التحميلات الأخيرة',
    'summary.userActivity': 'نشاط المستخدم',
    'summary.status.pending': 'قيد الانتظار',
    'summary.status.approved': 'تمت الموافقة',
    'summary.status.rejected': 'مرفوض',
    'summary.recentFiles.contractReview': 'مراجعة العقد',
    'summary.recentFiles.legalBrief': 'مذكرة قانونية',
    'summary.recentFiles.caseNotes': 'ملاحظات القضية',
    'summary.timeAgo.2hours': 'قبل ساعتين',
    'summary.timeAgo.4hours': 'قبل 4 ساعات',
    'summary.timeAgo.1day': 'قبل يوم واحد',

    // Files Section
    'files.title': 'الملفات',
    'files.upload': 'تحميل ملف',
    'files.search.placeholder': 'البحث في الملفات...',
    'files.filter.all': 'الكل',
    'files.filter.pending': 'قيد الانتظار',
    'files.filter.approved': 'تمت الموافقة',
    'files.filter.rejected': 'مرفوض',
    'files.table.name': 'الاسم',
    'files.table.type': 'النوع',
    'files.table.size': 'الحجم',
    'files.table.uploadedBy': 'تم التحميل بواسطة',
    'files.table.status': 'الحالة',
    'files.table.date': 'التاريخ',
    'files.table.actions': 'الإجراءات',
    'files.status.approved': 'تمت الموافقة',
    'files.status.pending': 'قيد الانتظار',
    'files.status.rejected': 'مرفوض',
    'files.actions.approve': 'موافقة',
    'files.actions.reject': 'رفض',
    'files.actions.delete': 'حذف',
    'files.sample.contractReview.name': 'مراجعة العقد.pdf',
    'files.sample.contractReview.uploadedBy': 'جون دو',
    'files.sample.legalBrief.name': 'مذكرة قانونية.docx',
    'files.sample.legalBrief.uploadedBy': 'جين سميث',
    'files.sample.caseNotes.name': 'ملاحظات القضية.pdf',
    'files.sample.caseNotes.uploadedBy': 'مايك جونسون',

    // Users Section
    'users.title': 'المستخدمون',
    'users.search.placeholder': 'البحث عن المستخدمين...',
    'users.filter.all': 'الكل',
    'users.filter.active': 'نشط',
    'users.filter.inactive': 'غير نشط',
    'users.filter.pending': 'قيد الانتظار',
    'users.table.name': 'الاسم',
    'users.table.email': 'البريد الإلكتروني',
    'users.table.role': 'الدور',
    'users.table.status': 'الحالة',
    'users.table.lastActive': 'آخر نشاط',
    'users.table.actions': 'الإجراءات',
    'users.roles.admin': 'مدير',
    'users.roles.user': 'مستخدم',
    'users.status.active': 'نشط',
    'users.status.inactive': 'غير نشط',
    'users.status.pending': 'قيد الانتظار',
    'users.actions.activate': 'تفعيل',
    'users.actions.deactivate': 'إلغاء التفعيل',
    'users.actions.delete': 'حذف',
    'users.sample.admin.name': 'جون دو',
    'users.sample.admin.email': 'john@example.com',
    'users.sample.user1.name': 'جين سميث',
    'users.sample.user1.email': 'jane@example.com',
    'users.sample.user2.name': 'مايك جونسون',
    'users.sample.user2.email': 'mike@example.com',

    // Analytics Section
    'analytics.title': 'التحليلات',
    'analytics.totalUploads': 'إجمالي التحميلات',
    'analytics.activeUsers': 'المستخدمون النشطون',
    'analytics.approvedFiles': 'الملفات المعتمدة',
    'analytics.pendingApprovals': 'الموافقات المعلقة',
    'analytics.fromLastMonth': 'من الشهر الماضي',
    'analytics.uploadTrends': 'اتجاهات التحميل',
    'analytics.userStats': 'إحصائيات المستخدمين',
    'analytics.uploadStats': 'إحصائيات التحميل',
    'analytics.chartPlaceholder': 'سيتم عرض الرسم البياني هنا',
    'analytics.recent.contractAnalysis.title': 'تحليل العقود الربع الأول 2024',
    'analytics.recent.contractAnalysis.createdBy': 'جون دو',
    'analytics.recent.contractAnalysis.type': 'تحليل العقد',
    'analytics.recent.contractAnalysis.details': 'تحليل جميع العقود للربع الأول 2024',
    'analytics.recent.documentReview.title': 'مراجعة المستندات القانونية',
    'analytics.recent.documentReview.createdBy': 'جين سميث',
    'analytics.recent.documentReview.type': 'مراجعة المستندات',
    'analytics.recent.documentReview.details': 'مراجعة المستندات القانونية للمشروع X',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get the language from localStorage, default to 'en' if not found
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage whenever it changes
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 