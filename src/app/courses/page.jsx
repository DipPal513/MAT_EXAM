"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBook, FaClock, FaDollarSign } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { base_url } from "@/utils/URL";
import toast from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const AllCoursesPage = () => {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    const token = Cookies.get("token");
    try {
      const response = await axios.get(
        `${base_url}/courses?orderBy=id&sortedBy=desc&page=1&limit=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCourses(response?.data?.data);
      console.log("courses data", response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleModalSubmit = () => {
    toast.success(`You selected: ${selectedOption} for course: ${selectedCourse?.title}`);
    setIsModalOpen(false);
    setSelectedOption("");
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 mb-8 px-2 sm:px-8 lg:px-16" id="courses">
      <div className="flex bg-white rounded-lg shadow border">
        {/* Main Content - Course Cards */}
        <div className="flex-1 py-3 px-2 sm:p-6">
          <h2 className="text-2xl border-b-2 pb-4 font-bold mb-6">
            <FaBook className="inline-block mr-2 text-indigo-500" />
            All Courses
          </h2>

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="cursor-pointer bg-white rounded-md shadow border p-4 animate-pulse"
                >
                  <div className="w-full h-48 bg-gray-300 rounded-t-md"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2 w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {error && <p className="text-red-500">{error}</p>}

          {!loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="cursor-pointer bg-white rounded-md shadow border p-4 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={course.photo}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-md"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      <FaBook className="inline-block mr-2 text-green-500" />
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-2 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-md font-semibold">
                        <FaClock className="inline-block mr-2 text-blue-500" />
                        34 Hours
                      </h3>
                      <p className="font-semibold text-md">
                        <FaDollarSign className="inline-block mr-2 text-yellow-500" />
                        399
                      </p>
                    </div>
                    <button
                      className="inline-block w-full text-center py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow hover:from-indigo-600 hover:to-purple-600 transition-colors"
                      onClick={() => handleEnrollClick(course)}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Enroll in {selectedCourse?.title}</h3>
            <Select onValueChange={(value) => setSelectedOption(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Package" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select One</SelectLabel>
          <SelectItem value="3 months">3 Months - 300TK</SelectItem>
          <SelectItem value="6 months">6 Months - 500TK</SelectItem>
          <SelectItem value="1 year">1 year - 800TK</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
            <div className="flex justify-end mt-5">
              <button
                className="mr-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-600"
                onClick={handleModalSubmit}
                disabled={!selectedOption}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCoursesPage;
