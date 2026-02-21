import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiUpload, FiImage, FiX, FiCheck, FiArrowRight, 
  FiAlertCircle, FiTrash2, FiEdit, FiZoomIn,
  FiGrid, FiFile, FiDownload, FiEye
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('frames');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { id: 'frames', name: 'Photo Frames', icon: '🖼️', description: 'Perfect for framing your memories' },
    { id: 'walls', name: 'Wall Photos', icon: '🏠', description: 'Transform your walls with art' },
    { id: 'designs', name: 'Design Photos', icon: '🎨', description: 'Creative templates and designs' },
  ];

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // Check file types
    const invalidFiles = rejectedFiles.filter(f => 
      f.file.type && !f.file.type.startsWith('image/')
    );
    
    if (invalidFiles.length > 0) {
      toast.error(`${invalidFiles.length} file(s) are not images`);
      return;
    }

    // Check total files limit
    if (files.length + acceptedFiles.length > 10) {
      toast.error('Maximum 10 files allowed');
      return;
    }

    const newFiles = acceptedFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      preview: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
      status: 'pending', // pending, uploading, completed, error
      error: null
    }));
    
    setFiles(prev => [...prev, ...newFiles]);
    toast.success(`${acceptedFiles.length} file(s) added successfully`);
  }, [files.length]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.bmp', '.webp', '.heic']
    },
    maxSize: 10485760, // 10MB
    maxFiles: 10
  });

  const removeFile = (id) => {
    setFiles(prev => {
      const newFiles = prev.filter(f => f.id !== id);
      // Revoke object URL to free memory
      const file = prev.find(f => f.id === id);
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
      return newFiles;
    });
    toast.success('File removed');
  };

  const removeAll = () => {
    files.forEach(file => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });
    setFiles([]);
    toast.success('All files removed');
  };

  const simulateUpload = async () => {
    setUploading(true);
    
    for (let i = 0; i <= 100; i += 10) {
      const newProgress = {};
      files.forEach(file => {
        if (file.status !== 'error') {
          newProgress[file.id] = i;
        }
      });
      setUploadProgress(newProgress);
      
      setFiles(prev => 
        prev.map(f => ({
          ...f,
          progress: newProgress[f.id] || f.progress,
          status: newProgress[f.id] === 100 ? 'completed' : 'uploading'
        }))
      );
      
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    setUploading(false);
    toast.success('All files uploaded successfully!');
    
    // Navigate to customization after 2 seconds
    setTimeout(() => {
      navigate('/customize', { 
        state: { 
          files: files.map(f => ({
            id: f.id,
            name: f.name,
            preview: f.preview
          })),
          category: selectedCategory 
        }
      });
    }, 2000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type) => {
    if (type.includes('jpeg') || type.includes('jpg')) return '🖼️';
    if (type.includes('png')) return '🖼️';
    if (type.includes('gif')) return '🎞️';
    if (type.includes('webp')) return '🖼️';
    if (type.includes('heic')) return '📱';
    return <FiFile />;
  };

  return (
    <div className="min-h-screen bg-base-100 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Upload Your Photos
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Upload your precious moments and we'll transform them into beautiful keepsakes
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Category Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold mb-4">Choose Customization Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedCategory === cat.id
                      ? 'border-primary bg-primary/5'
                      : 'border-base-300 hover:border-primary/50'
                  }`}
                >
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <h3 className="font-bold">{cat.name}</h3>
                  <p className="text-xs text-base-content/60 mt-1">{cat.description}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div
              {...getRootProps()}
              className={`
                border-4 border-dashed rounded-2xl p-12 text-center cursor-pointer
                transition-all duration-300
                ${isDragActive 
                  ? 'border-primary bg-primary/5 scale-105' 
                  : 'border-base-300 hover:border-primary hover:bg-base-200/50'
                }
                ${files.length >= 10 ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <input {...getInputProps()} disabled={files.length >= 10} />
              
              <div className="flex flex-col items-center gap-4">
                <div className={`
                  w-24 h-24 rounded-full flex items-center justify-center
                  transition-all duration-300
                  ${isDragActive 
                    ? 'bg-primary/20 scale-110' 
                    : 'bg-base-300'
                  }
                `}>
                  <FiUpload className={`text-4xl transition-all ${
                    isDragActive ? 'text-primary' : 'text-base-content/50'
                  }`} />
                </div>
                
                <div>
                  <p className="text-xl font-semibold mb-2">
                    {isDragActive 
                      ? 'Drop your photos here' 
                      : 'Drag & drop your photos here'
                    }
                  </p>
                  <p className="text-base-content/50">
                    or <span className="text-primary font-medium cursor-pointer">browse files</span>
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center text-sm text-base-content/50">
                  <span>📷 JPG, PNG, GIF, WEBP</span>
                  <span>•</span>
                  <span>📦 Max 10 files</span>
                  <span>•</span>
                  <span>⚡ Up to 10MB each</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* File List */}
          <AnimatePresence>
            {files.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-base-200 rounded-2xl p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">
                    Uploaded Files ({files.length}/10)
                  </h2>
                  <button
                    onClick={removeAll}
                    className="btn btn-ghost btn-sm text-error gap-2"
                  >
                    <FiTrash2 />
                    Remove All
                  </button>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {files.map((file) => (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-4 p-4 bg-base-100 rounded-xl shadow-sm"
                    >
                      {/* File Preview */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-base-200 flex items-center justify-center flex-shrink-0">
                        {file.preview ? (
                          <img 
                            src={file.preview} 
                            alt={file.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-2xl">{getFileIcon(file.type)}</span>
                        )}
                      </div>

                      {/* File Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <p className="font-medium truncate">{file.name}</p>
                            <p className="text-xs text-base-content/50">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                          
                          {/* Status Badge */}
                          {file.status === 'completed' && (
                            <div className="badge badge-success gap-1">
                              <FiCheck />
                              Uploaded
                            </div>
                          )}
                          {file.status === 'error' && (
                            <div className="badge badge-error gap-1">
                              <FiAlertCircle />
                              Failed
                            </div>
                          )}
                        </div>

                        {/* Progress Bar */}
                        {file.status === 'uploading' && (
                          <div className="relative h-2 bg-base-200 rounded-full overflow-hidden mt-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${file.progress}%` }}
                              className="absolute top-0 left-0 h-full bg-primary"
                            />
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => window.open(file.preview, '_blank')}
                          className="btn btn-ghost btn-sm btn-circle"
                          title="Preview"
                        >
                          <FiEye />
                        </button>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="btn btn-ghost btn-sm btn-circle text-error"
                          title="Remove"
                          disabled={uploading}
                        >
                          <FiX />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Upload Actions */}
                <div className="mt-6 space-y-4">
                  {/* Terms Agreement */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="checkbox checkbox-primary checkbox-sm"
                    />
                    <span className="text-sm">
                      I confirm that I have the rights to these photos and agree to the{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>
                    </span>
                  </label>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-end">
                    <Link
                      to="/"
                      className="btn btn-outline"
                    >
                      Cancel
                    </Link>
                    
                    <button
                      onClick={simulateUpload}
                      disabled={files.length === 0 || !agreedToTerms || uploading}
                      className="btn btn-primary gap-2"
                    >
                      {uploading ? (
                        <>
                          <span className="loading loading-spinner loading-sm"></span>
                          Uploading... {Math.max(...Object.values(uploadProgress))}%
                        </>
                      ) : (
                        <>
                          <FiUpload />
                          Upload & Continue
                          <FiArrowRight />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {files.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4 opacity-30">📸</div>
              <h3 className="text-xl font-bold mb-2">No photos uploaded yet</h3>
              <p className="text-base-content/60">
                Drag and drop your photos above to get started
              </p>
            </motion.div>
          )}

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-base-200 p-4 rounded-xl">
              <div className="text-2xl mb-2">📷</div>
              <h4 className="font-bold mb-1">High Resolution</h4>
              <p className="text-sm text-base-content/60">
                Upload high-quality photos for best results
              </p>
            </div>
            
            <div className="bg-base-200 p-4 rounded-xl">
              <div className="text-2xl mb-2">🎨</div>
              <h4 className="font-bold mb-1">Multiple Formats</h4>
              <p className="text-sm text-base-content/60">
                We support JPG, PNG, GIF, WEBP and more
              </p>
            </div>
            
            <div className="bg-base-200 p-4 rounded-xl">
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="font-bold mb-1">Secure & Private</h4>
              <p className="text-sm text-base-content/60">
                Your photos are encrypted and never shared
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Upload;