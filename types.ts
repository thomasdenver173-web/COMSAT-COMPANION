
export type UserRole = 'Student' | 'CR' | 'GC' | 'Admin';

export interface UserData {
    name: string;
    program: string;
    semester: number;
    cgpa: number;
    universityId: string;
    role: UserRole;
    isAuthenticated: boolean;
    isApproved?: boolean;
    avatarUrl?: string; // New field for profile picture
}

export enum DayOfWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
}

export interface ClassSession {
    id: string;
    courseName: string;
    code: string;
    instructor: string;
    room: string;
    startTime: string; // "08:30"
    endTime: string;   // "10:00"
    day: DayOfWeek;
    type: 'Lecture' | 'Lab';
}

export interface Announcement {
    id: string;
    source: 'Facebook' | 'Mail' | 'WhatsApp' | 'Portal';
    title: string;
    message: string;
    date: string;
    isImportant: boolean;
    authorRole?: UserRole;
}

export interface VideoContent {
    id: string;
    title: string;
    url: string;
    duration: string;
}

export interface LearningModule {
    id: string;
    title: string;
    description: string;
    category: 'Java' | 'Python' | 'C' | 'C++' | 'AI Core'; 
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    thumbnailUrl: string;
    videos: VideoContent[];
    topics?: string[]; 
    resources?: string[];
    prerequisiteId?: string;
}

export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface FloorLocation {
    id: string;
    name: string;
    type: 'Classroom' | 'Lab' | 'Office' | 'Amenity';
    description: string;
    coordinates: { x: number; y: number };
}

export interface Note {
    id: string;
    title: string;
    subject: string;
    uploaderName: string;
    date: string;
    size: string;
    url: string;
}

export interface Feedback {
    id: string;
    studentId: string;
    message: string;
    category: 'Bug' | 'Suggestion' | 'Content';
    date: string;
}

export interface Deadline {
    id: string;
    title: string;
    date: string; // YYYY-MM-DD
    type: 'Quiz' | 'Assignment' | 'Project' | 'Exam';
}

export interface AppNotification {
    id: string;
    title: string;
    message: string;
    type: 'Alert' | 'Info' | 'Success';
    timestamp: number;
}

// --- NEW TYPES FOR UPDATED FEATURES ---

export interface ChatMessage {
    id: string;
    senderId: string;
    senderRegNo?: string; 
    senderName: string;
    receiverId?: string; // Added for threading
    text: string;
    timestamp: number;
    isRead: boolean;
}

export interface AttendanceRecord {
    studentId: string;
    date: string; // YYYY-MM-DD
    status: 'Present' | 'Absent' | 'Leave';
}

export interface LeaderboardEntry {
    studentId: string;
    name: string;
    regNo: string;
    points: number;
    rank: number;
    avatarUrl?: string;
}
