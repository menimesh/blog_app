"use client";
import { useState } from "react";
import type React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { PenTool, Upload, FileText, Tag, Sparkles } from "lucide-react";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const CreateArticlesPage = () => {
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
            <PenTool className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create New Article
          </h1>
          <p className="text-gray-600">Craft something amazing ✨</p>
        </div>

        {/* Main Card */}
        <Card className="bg-white/90 backdrop-blur border-0 shadow-xl">
          <CardContent className="p-8">
            <form className="space-y-7">
              {/* Title */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <Label htmlFor="title" className="font-medium text-gray-700">
                    Article Title
                  </Label>
                </div>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="What's your story about?"
                  className="h-11 border-2 border-gray-200 focus:border-blue-400 rounded-lg"
                />
              </div>

              {/* Category */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-blue-500" />
                  <Label className="font-medium text-gray-700">Category</Label>
                </div>
                <select
                  name="category"
                  className="w-full h-11 px-4 border-2 border-gray-200 bg-white rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                >
                  <option value="">Pick a category...</option>
                  <option value="technology">🚀 Technology</option>
                  <option value="programming">💻 Programming</option>
                  <option value="web-development">🌐 Web Development</option>
                  <option value="design">🎨 Design</option>
                </select>
              </div>

              {/* Featured Image - Centered Upload */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-blue-500" />
                  <Label className="font-medium text-gray-700">
                    Featured Image
                  </Label>
                </div>
                <div className="relative">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue-400 transition-colors bg-gray-50/50">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          {selectedFile
                            ? selectedFile.name
                            : "Drop your image here or click to browse"}
                        </p>
                        <div className="flex justify-center">
                          <label
                            htmlFor="featuredimage"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg cursor-pointer transition-colors"
                          >
                            <Sparkles className="w-4 h-4" />
                            Choose File
                          </label>
                        </div>
                      </div>
                    </div>
                    <input
                      type="file"
                      id="featuredimage"
                      name="featuredimage"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Content Editor */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-blue-500" />
                  <Label className="font-medium text-gray-700">Content</Label>
                </div>
                <div className="border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-400 transition-colors">
                  <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    placeholder="Tell your story..."
                    className="min-h-[320px]"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-11 border-2 hover:bg-gray-50 rounded-lg"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 h-11 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Create Article
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Custom Quill Styles */}
      <style jsx global>{`
        .ql-toolbar {
          border-top: none !important;
          border-left: none !important;
          border-right: none !important;
          border-bottom: 1px solid #e5e7eb !important;
          background: #f9fafb !important;
        }
        .ql-container {
          border: none !important;
        }
        .ql-editor {
          min-height: 280px !important;
          padding: 16px !important;
        }
      `}</style>
    </div>
  );
};

export default CreateArticlesPage;
