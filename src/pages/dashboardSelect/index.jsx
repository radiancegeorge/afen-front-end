import { NavLink, Redirect } from "react-router-dom";
import useCheckAuth from "../../hooks/checkAuth";
import bg from "../../img/afen-blog-bg.jpg";
import logo from "../../img/afenblog.png";
import "./dashboardOptions.scss";

const DashboardOptions = () => {
  const { isAuth } = useCheckAuth();
  return isAuth ? (
    <div
      className="dashboard__options"
      style={{
        backgroundImage: `url(${bg})`,
      }}>
      <div className="container__">
        <div className="logo">
          <a href="/">
            {" "}
            <img src={logo} alt="" />
          </a>
        </div>
        <NavLink to="newPost" className="blog__post">
          <svg
            width="303"
            height="303"
            viewBox="0 0 303 303"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="303" height="303" rx="7" fill="#4C5367" />
            <rect
              x="0.5"
              y="0.5"
              width="302"
              height="302"
              rx="6.5"
              stroke="white"
              stroke-opacity="0.24"
            />
            <path
              d="M91.342 198C91.0193 197.457 90.6453 196.849 90.22 196.174C89.8093 195.499 89.362 194.803 88.878 194.084C88.394 193.351 87.888 192.61 87.36 191.862C86.8467 191.114 86.3333 190.395 85.82 189.706C85.3067 189.002 84.808 188.342 84.324 187.726C83.84 187.11 83.3927 186.567 82.982 186.098V198H80.892V182.754H82.586C83.2753 183.487 84.0087 184.345 84.786 185.328C85.578 186.296 86.3553 187.301 87.118 188.342C87.8953 189.369 88.6213 190.381 89.296 191.378C89.9853 192.375 90.5647 193.263 91.034 194.04V182.754H93.124V198H91.342ZM96.1279 192.302C96.1279 191.29 96.2745 190.41 96.5679 189.662C96.8612 188.899 97.2499 188.269 97.7339 187.77C98.2179 187.271 98.7752 186.897 99.4059 186.648C100.037 186.399 100.682 186.274 101.342 186.274C102.882 186.274 104.063 186.758 104.884 187.726C105.705 188.679 106.116 190.139 106.116 192.104C106.116 192.192 106.116 192.309 106.116 192.456C106.116 192.588 106.109 192.713 106.094 192.83H98.2619C98.3499 194.018 98.6945 194.92 99.2959 195.536C99.8972 196.152 100.836 196.46 102.112 196.46C102.831 196.46 103.432 196.401 103.916 196.284C104.415 196.152 104.789 196.027 105.038 195.91L105.324 197.626C105.075 197.758 104.635 197.897 104.004 198.044C103.388 198.191 102.684 198.264 101.892 198.264C100.895 198.264 100.029 198.117 99.2959 197.824C98.5772 197.516 97.9832 197.098 97.5139 196.57C97.0445 196.042 96.6925 195.419 96.4579 194.7C96.2379 193.967 96.1279 193.167 96.1279 192.302ZM103.982 191.18C103.997 190.256 103.762 189.501 103.278 188.914C102.809 188.313 102.156 188.012 101.32 188.012C100.851 188.012 100.433 188.107 100.066 188.298C99.7139 188.474 99.4132 188.709 99.1639 189.002C98.9145 189.295 98.7165 189.633 98.5699 190.014C98.4379 190.395 98.3499 190.784 98.3059 191.18H103.982ZM118.405 198C117.994 196.944 117.554 195.741 117.085 194.392C116.63 193.028 116.212 191.613 115.831 190.146C115.45 191.613 115.032 193.028 114.577 194.392C114.122 195.741 113.69 196.944 113.279 198H111.497C110.822 196.489 110.162 194.766 109.517 192.83C108.872 190.894 108.263 188.804 107.691 186.56H109.891C110.038 187.249 110.214 187.997 110.419 188.804C110.624 189.611 110.837 190.417 111.057 191.224C111.292 192.031 111.534 192.808 111.783 193.556C112.032 194.304 112.267 194.957 112.487 195.514C112.736 194.825 112.978 194.099 113.213 193.336C113.462 192.559 113.697 191.781 113.917 191.004C114.137 190.212 114.342 189.442 114.533 188.694C114.738 187.931 114.914 187.22 115.061 186.56H116.755C116.887 187.22 117.048 187.931 117.239 188.694C117.43 189.442 117.635 190.212 117.855 191.004C118.075 191.781 118.302 192.559 118.537 193.336C118.786 194.099 119.036 194.825 119.285 195.514C119.505 194.957 119.732 194.304 119.967 193.556C120.216 192.808 120.458 192.031 120.693 191.224C120.928 190.417 121.148 189.611 121.353 188.804C121.558 187.997 121.734 187.249 121.881 186.56H123.993C123.421 188.804 122.812 190.894 122.167 192.83C121.522 194.766 120.862 196.489 120.187 198H118.405ZM135.494 198.132C135.186 198.132 134.849 198.125 134.482 198.11C134.13 198.095 133.771 198.073 133.404 198.044C133.052 198.015 132.7 197.978 132.348 197.934C131.996 197.89 131.674 197.831 131.38 197.758V182.974C131.674 182.901 131.996 182.842 132.348 182.798C132.7 182.754 133.052 182.717 133.404 182.688C133.771 182.659 134.13 182.637 134.482 182.622C134.834 182.607 135.164 182.6 135.472 182.6C136.352 182.6 137.174 182.666 137.936 182.798C138.714 182.93 139.381 183.157 139.938 183.48C140.51 183.788 140.958 184.199 141.28 184.712C141.603 185.225 141.764 185.856 141.764 186.604C141.764 187.44 141.566 188.129 141.17 188.672C140.774 189.2 140.246 189.596 139.586 189.86C140.481 190.124 141.192 190.542 141.72 191.114C142.248 191.686 142.512 192.493 142.512 193.534C142.512 195.059 141.948 196.211 140.818 196.988C139.704 197.751 137.929 198.132 135.494 198.132ZM133.492 190.894V196.262C133.654 196.277 133.844 196.291 134.064 196.306C134.255 196.321 134.475 196.335 134.724 196.35C134.988 196.35 135.289 196.35 135.626 196.35C136.257 196.35 136.851 196.313 137.408 196.24C137.98 196.152 138.479 196.005 138.904 195.8C139.33 195.595 139.667 195.309 139.916 194.942C140.18 194.575 140.312 194.113 140.312 193.556C140.312 193.057 140.217 192.639 140.026 192.302C139.836 191.95 139.557 191.671 139.19 191.466C138.838 191.261 138.413 191.114 137.914 191.026C137.416 190.938 136.858 190.894 136.242 190.894H133.492ZM133.492 189.178H135.736C136.264 189.178 136.763 189.141 137.232 189.068C137.702 188.995 138.105 188.863 138.442 188.672C138.794 188.481 139.066 188.232 139.256 187.924C139.462 187.616 139.564 187.227 139.564 186.758C139.564 186.318 139.462 185.951 139.256 185.658C139.051 185.35 138.765 185.108 138.398 184.932C138.046 184.741 137.628 184.602 137.144 184.514C136.66 184.426 136.147 184.382 135.604 184.382C135.062 184.382 134.636 184.389 134.328 184.404C134.02 184.419 133.742 184.441 133.492 184.47V189.178ZM148.817 198.22C147.556 198.191 146.661 197.919 146.133 197.406C145.605 196.893 145.341 196.093 145.341 195.008V181.28L147.387 180.928V194.678C147.387 195.015 147.416 195.294 147.475 195.514C147.534 195.734 147.629 195.91 147.761 196.042C147.893 196.174 148.069 196.277 148.289 196.35C148.509 196.409 148.78 196.46 149.103 196.504L148.817 198.22ZM161.499 192.28C161.499 193.189 161.367 194.011 161.103 194.744C160.839 195.477 160.465 196.108 159.981 196.636C159.511 197.164 158.947 197.575 158.287 197.868C157.627 198.147 156.908 198.286 156.131 198.286C155.353 198.286 154.635 198.147 153.975 197.868C153.315 197.575 152.743 197.164 152.259 196.636C151.789 196.108 151.423 195.477 151.159 194.744C150.895 194.011 150.763 193.189 150.763 192.28C150.763 191.385 150.895 190.571 151.159 189.838C151.423 189.09 151.789 188.452 152.259 187.924C152.743 187.396 153.315 186.993 153.975 186.714C154.635 186.421 155.353 186.274 156.131 186.274C156.908 186.274 157.627 186.421 158.287 186.714C158.947 186.993 159.511 187.396 159.981 187.924C160.465 188.452 160.839 189.09 161.103 189.838C161.367 190.571 161.499 191.385 161.499 192.28ZM159.365 192.28C159.365 190.989 159.071 189.97 158.485 189.222C157.913 188.459 157.128 188.078 156.131 188.078C155.133 188.078 154.341 188.459 153.755 189.222C153.183 189.97 152.897 190.989 152.897 192.28C152.897 193.571 153.183 194.597 153.755 195.36C154.341 196.108 155.133 196.482 156.131 196.482C157.128 196.482 157.913 196.108 158.485 195.36C159.071 194.597 159.365 193.571 159.365 192.28ZM171.549 196.856C171.373 196.973 171.029 197.127 170.515 197.318C170.017 197.494 169.43 197.582 168.755 197.582C168.066 197.582 167.413 197.472 166.797 197.252C166.196 197.032 165.668 196.695 165.213 196.24C164.759 195.771 164.399 195.191 164.135 194.502C163.871 193.813 163.739 192.991 163.739 192.038C163.739 191.202 163.864 190.439 164.113 189.75C164.363 189.046 164.722 188.445 165.191 187.946C165.675 187.433 166.262 187.037 166.951 186.758C167.641 186.465 168.418 186.318 169.283 186.318C170.237 186.318 171.065 186.391 171.769 186.538C172.488 186.67 173.089 186.795 173.573 186.912V197.12C173.573 198.88 173.119 200.156 172.209 200.948C171.3 201.74 169.921 202.136 168.073 202.136C167.355 202.136 166.673 202.077 166.027 201.96C165.397 201.843 164.847 201.703 164.377 201.542L164.751 199.76C165.162 199.921 165.661 200.061 166.247 200.178C166.849 200.31 167.472 200.376 168.117 200.376C169.335 200.376 170.207 200.134 170.735 199.65C171.278 199.166 171.549 198.396 171.549 197.34V196.856ZM171.527 188.364C171.322 188.305 171.043 188.254 170.691 188.21C170.354 188.151 169.892 188.122 169.305 188.122C168.205 188.122 167.355 188.481 166.753 189.2C166.167 189.919 165.873 190.872 165.873 192.06C165.873 192.72 165.954 193.285 166.115 193.754C166.291 194.223 166.519 194.612 166.797 194.92C167.091 195.228 167.421 195.455 167.787 195.602C168.169 195.749 168.557 195.822 168.953 195.822C169.496 195.822 169.995 195.749 170.449 195.602C170.904 195.441 171.263 195.257 171.527 195.052V188.364ZM186.368 182.6C188.509 182.6 190.152 183.011 191.296 183.832C192.454 184.639 193.034 185.849 193.034 187.462C193.034 188.342 192.872 189.097 192.55 189.728C192.242 190.344 191.787 190.85 191.186 191.246C190.599 191.627 189.88 191.906 189.03 192.082C188.179 192.258 187.218 192.346 186.148 192.346H184.454V198H182.32V182.974C182.921 182.827 183.588 182.732 184.322 182.688C185.07 182.629 185.752 182.6 186.368 182.6ZM186.544 184.47C185.634 184.47 184.938 184.492 184.454 184.536V190.52H186.06C186.793 190.52 187.453 190.476 188.04 190.388C188.626 190.285 189.118 190.124 189.514 189.904C189.924 189.669 190.24 189.354 190.46 188.958C190.68 188.562 190.79 188.056 190.79 187.44C190.79 186.853 190.672 186.369 190.438 185.988C190.218 185.607 189.91 185.306 189.514 185.086C189.132 184.851 188.685 184.69 188.172 184.602C187.658 184.514 187.116 184.47 186.544 184.47ZM205.198 192.28C205.198 193.189 205.066 194.011 204.802 194.744C204.538 195.477 204.164 196.108 203.68 196.636C203.211 197.164 202.646 197.575 201.986 197.868C201.326 198.147 200.607 198.286 199.83 198.286C199.053 198.286 198.334 198.147 197.674 197.868C197.014 197.575 196.442 197.164 195.958 196.636C195.489 196.108 195.122 195.477 194.858 194.744C194.594 194.011 194.462 193.189 194.462 192.28C194.462 191.385 194.594 190.571 194.858 189.838C195.122 189.09 195.489 188.452 195.958 187.924C196.442 187.396 197.014 186.993 197.674 186.714C198.334 186.421 199.053 186.274 199.83 186.274C200.607 186.274 201.326 186.421 201.986 186.714C202.646 186.993 203.211 187.396 203.68 187.924C204.164 188.452 204.538 189.09 204.802 189.838C205.066 190.571 205.198 191.385 205.198 192.28ZM203.064 192.28C203.064 190.989 202.771 189.97 202.184 189.222C201.612 188.459 200.827 188.078 199.83 188.078C198.833 188.078 198.041 188.459 197.454 189.222C196.882 189.97 196.596 190.989 196.596 192.28C196.596 193.571 196.882 194.597 197.454 195.36C198.041 196.108 198.833 196.482 199.83 196.482C200.827 196.482 201.612 196.108 202.184 195.36C202.771 194.597 203.064 193.571 203.064 192.28ZM210.738 196.526C211.574 196.526 212.19 196.416 212.586 196.196C212.997 195.976 213.202 195.624 213.202 195.14C213.202 194.641 213.004 194.245 212.608 193.952C212.212 193.659 211.56 193.329 210.65 192.962C210.21 192.786 209.785 192.61 209.374 192.434C208.978 192.243 208.634 192.023 208.34 191.774C208.047 191.525 207.812 191.224 207.636 190.872C207.46 190.52 207.372 190.087 207.372 189.574C207.372 188.562 207.746 187.763 208.494 187.176C209.242 186.575 210.262 186.274 211.552 186.274C211.875 186.274 212.198 186.296 212.52 186.34C212.843 186.369 213.144 186.413 213.422 186.472C213.701 186.516 213.943 186.567 214.148 186.626C214.368 186.685 214.537 186.736 214.654 186.78L214.28 188.54C214.06 188.423 213.716 188.305 213.246 188.188C212.777 188.056 212.212 187.99 211.552 187.99C210.98 187.99 210.482 188.107 210.056 188.342C209.631 188.562 209.418 188.914 209.418 189.398C209.418 189.647 209.462 189.867 209.55 190.058C209.653 190.249 209.8 190.425 209.99 190.586C210.196 190.733 210.445 190.872 210.738 191.004C211.032 191.136 211.384 191.275 211.794 191.422C212.337 191.627 212.821 191.833 213.246 192.038C213.672 192.229 214.031 192.456 214.324 192.72C214.632 192.984 214.867 193.307 215.028 193.688C215.19 194.055 215.27 194.509 215.27 195.052C215.27 196.108 214.874 196.907 214.082 197.45C213.305 197.993 212.19 198.264 210.738 198.264C209.726 198.264 208.934 198.176 208.362 198C207.79 197.839 207.402 197.714 207.196 197.626L207.57 195.866C207.805 195.954 208.179 196.086 208.692 196.262C209.206 196.438 209.888 196.526 210.738 196.526ZM219.809 186.56H224.143V188.276H219.809V193.556C219.809 194.128 219.853 194.605 219.941 194.986C220.029 195.353 220.161 195.646 220.337 195.866C220.513 196.071 220.733 196.218 220.997 196.306C221.261 196.394 221.569 196.438 221.921 196.438C222.537 196.438 223.028 196.372 223.395 196.24C223.776 196.093 224.04 195.991 224.187 195.932L224.583 197.626C224.377 197.729 224.018 197.853 223.505 198C222.991 198.161 222.405 198.242 221.745 198.242C220.967 198.242 220.322 198.147 219.809 197.956C219.31 197.751 218.907 197.45 218.599 197.054C218.291 196.658 218.071 196.174 217.939 195.602C217.821 195.015 217.763 194.341 217.763 193.578V183.37L219.809 183.018V186.56Z"
              fill="white"
            />
            <path
              d="M152 111V139"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M138 125H166"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NavLink>
        <NavLink to="/blogdelete" className="view__blog__post">
          <svg
            width="303"
            height="303"
            viewBox="0 0 303 303"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="303" height="303" rx="7" fill="#4C5367" />
            <rect
              x="0.5"
              y="0.5"
              width="302"
              height="302"
              rx="6.5"
              stroke="white"
              stroke-opacity="0.24"
            />
            <path
              d="M86.212 182.754C85.6547 184.367 85.1193 185.863 84.606 187.242C84.1073 188.606 83.616 189.904 83.132 191.136C82.648 192.368 82.164 193.549 81.68 194.678C81.2107 195.793 80.7267 196.9 80.228 198H78.226C77.7273 196.9 77.236 195.793 76.752 194.678C76.2827 193.549 75.7987 192.368 75.3 191.136C74.816 189.904 74.3173 188.606 73.804 187.242C73.2907 185.863 72.7627 184.367 72.22 182.754H74.574C75.366 185.071 76.1433 187.301 76.906 189.442C77.6687 191.583 78.4533 193.593 79.26 195.47C80.0667 193.607 80.8513 191.605 81.614 189.464C82.3767 187.308 83.1467 185.071 83.924 182.754H86.212ZM90.2435 198H88.1975V186.56H90.2435V198ZM89.2095 184.492C88.8428 184.492 88.5275 184.375 88.2635 184.14C88.0142 183.891 87.8895 183.561 87.8895 183.15C87.8895 182.739 88.0142 182.417 88.2635 182.182C88.5275 181.933 88.8428 181.808 89.2095 181.808C89.5762 181.808 89.8842 181.933 90.1335 182.182C90.3975 182.417 90.5295 182.739 90.5295 183.15C90.5295 183.561 90.3975 183.891 90.1335 184.14C89.8842 184.375 89.5762 184.492 89.2095 184.492ZM93.124 192.302C93.124 191.29 93.2706 190.41 93.564 189.662C93.8573 188.899 94.246 188.269 94.73 187.77C95.214 187.271 95.7713 186.897 96.402 186.648C97.0326 186.399 97.678 186.274 98.338 186.274C99.878 186.274 101.059 186.758 101.88 187.726C102.701 188.679 103.112 190.139 103.112 192.104C103.112 192.192 103.112 192.309 103.112 192.456C103.112 192.588 103.105 192.713 103.09 192.83H95.258C95.346 194.018 95.6906 194.92 96.292 195.536C96.8933 196.152 97.832 196.46 99.108 196.46C99.8266 196.46 100.428 196.401 100.912 196.284C101.411 196.152 101.785 196.027 102.034 195.91L102.32 197.626C102.071 197.758 101.631 197.897 101 198.044C100.384 198.191 99.68 198.264 98.888 198.264C97.8906 198.264 97.0253 198.117 96.292 197.824C95.5733 197.516 94.9793 197.098 94.51 196.57C94.0406 196.042 93.6886 195.419 93.454 194.7C93.234 193.967 93.124 193.167 93.124 192.302ZM100.978 191.18C100.993 190.256 100.758 189.501 100.274 188.914C99.8046 188.313 99.152 188.012 98.316 188.012C97.8466 188.012 97.4286 188.107 97.062 188.298C96.71 188.474 96.4093 188.709 96.16 189.002C95.9106 189.295 95.7126 189.633 95.566 190.014C95.434 190.395 95.346 190.784 95.302 191.18H100.978ZM115.401 198C114.99 196.944 114.55 195.741 114.081 194.392C113.626 193.028 113.208 191.613 112.827 190.146C112.446 191.613 112.028 193.028 111.573 194.392C111.118 195.741 110.686 196.944 110.275 198H108.493C107.818 196.489 107.158 194.766 106.513 192.83C105.868 190.894 105.259 188.804 104.687 186.56H106.887C107.034 187.249 107.21 187.997 107.415 188.804C107.62 189.611 107.833 190.417 108.053 191.224C108.288 192.031 108.53 192.808 108.779 193.556C109.028 194.304 109.263 194.957 109.483 195.514C109.732 194.825 109.974 194.099 110.209 193.336C110.458 192.559 110.693 191.781 110.913 191.004C111.133 190.212 111.338 189.442 111.529 188.694C111.734 187.931 111.91 187.22 112.057 186.56H113.751C113.883 187.22 114.044 187.931 114.235 188.694C114.426 189.442 114.631 190.212 114.851 191.004C115.071 191.781 115.298 192.559 115.533 193.336C115.782 194.099 116.032 194.825 116.281 195.514C116.501 194.957 116.728 194.304 116.963 193.556C117.212 192.808 117.454 192.031 117.689 191.224C117.924 190.417 118.144 189.611 118.349 188.804C118.554 187.997 118.73 187.249 118.877 186.56H120.989C120.417 188.804 119.808 190.894 119.163 192.83C118.518 194.766 117.858 196.489 117.183 198H115.401ZM132.49 198.132C132.182 198.132 131.845 198.125 131.478 198.11C131.126 198.095 130.767 198.073 130.4 198.044C130.048 198.015 129.696 197.978 129.344 197.934C128.992 197.89 128.67 197.831 128.376 197.758V182.974C128.67 182.901 128.992 182.842 129.344 182.798C129.696 182.754 130.048 182.717 130.4 182.688C130.767 182.659 131.126 182.637 131.478 182.622C131.83 182.607 132.16 182.6 132.468 182.6C133.348 182.6 134.17 182.666 134.932 182.798C135.71 182.93 136.377 183.157 136.934 183.48C137.506 183.788 137.954 184.199 138.276 184.712C138.599 185.225 138.76 185.856 138.76 186.604C138.76 187.44 138.562 188.129 138.166 188.672C137.77 189.2 137.242 189.596 136.582 189.86C137.477 190.124 138.188 190.542 138.716 191.114C139.244 191.686 139.508 192.493 139.508 193.534C139.508 195.059 138.944 196.211 137.814 196.988C136.7 197.751 134.925 198.132 132.49 198.132ZM130.488 190.894V196.262C130.65 196.277 130.84 196.291 131.06 196.306C131.251 196.321 131.471 196.335 131.72 196.35C131.984 196.35 132.285 196.35 132.622 196.35C133.253 196.35 133.847 196.313 134.404 196.24C134.976 196.152 135.475 196.005 135.9 195.8C136.326 195.595 136.663 195.309 136.912 194.942C137.176 194.575 137.308 194.113 137.308 193.556C137.308 193.057 137.213 192.639 137.022 192.302C136.832 191.95 136.553 191.671 136.186 191.466C135.834 191.261 135.409 191.114 134.91 191.026C134.412 190.938 133.854 190.894 133.238 190.894H130.488ZM130.488 189.178H132.732C133.26 189.178 133.759 189.141 134.228 189.068C134.698 188.995 135.101 188.863 135.438 188.672C135.79 188.481 136.062 188.232 136.252 187.924C136.458 187.616 136.56 187.227 136.56 186.758C136.56 186.318 136.458 185.951 136.252 185.658C136.047 185.35 135.761 185.108 135.394 184.932C135.042 184.741 134.624 184.602 134.14 184.514C133.656 184.426 133.143 184.382 132.6 184.382C132.058 184.382 131.632 184.389 131.324 184.404C131.016 184.419 130.738 184.441 130.488 184.47V189.178ZM145.813 198.22C144.552 198.191 143.657 197.919 143.129 197.406C142.601 196.893 142.337 196.093 142.337 195.008V181.28L144.383 180.928V194.678C144.383 195.015 144.412 195.294 144.471 195.514C144.53 195.734 144.625 195.91 144.757 196.042C144.889 196.174 145.065 196.277 145.285 196.35C145.505 196.409 145.776 196.46 146.099 196.504L145.813 198.22ZM158.495 192.28C158.495 193.189 158.363 194.011 158.099 194.744C157.835 195.477 157.461 196.108 156.977 196.636C156.507 197.164 155.943 197.575 155.283 197.868C154.623 198.147 153.904 198.286 153.127 198.286C152.349 198.286 151.631 198.147 150.971 197.868C150.311 197.575 149.739 197.164 149.255 196.636C148.785 196.108 148.419 195.477 148.155 194.744C147.891 194.011 147.759 193.189 147.759 192.28C147.759 191.385 147.891 190.571 148.155 189.838C148.419 189.09 148.785 188.452 149.255 187.924C149.739 187.396 150.311 186.993 150.971 186.714C151.631 186.421 152.349 186.274 153.127 186.274C153.904 186.274 154.623 186.421 155.283 186.714C155.943 186.993 156.507 187.396 156.977 187.924C157.461 188.452 157.835 189.09 158.099 189.838C158.363 190.571 158.495 191.385 158.495 192.28ZM156.361 192.28C156.361 190.989 156.067 189.97 155.481 189.222C154.909 188.459 154.124 188.078 153.127 188.078C152.129 188.078 151.337 188.459 150.751 189.222C150.179 189.97 149.893 190.989 149.893 192.28C149.893 193.571 150.179 194.597 150.751 195.36C151.337 196.108 152.129 196.482 153.127 196.482C154.124 196.482 154.909 196.108 155.481 195.36C156.067 194.597 156.361 193.571 156.361 192.28ZM168.545 196.856C168.369 196.973 168.025 197.127 167.511 197.318C167.013 197.494 166.426 197.582 165.751 197.582C165.062 197.582 164.409 197.472 163.793 197.252C163.192 197.032 162.664 196.695 162.209 196.24C161.755 195.771 161.395 195.191 161.131 194.502C160.867 193.813 160.735 192.991 160.735 192.038C160.735 191.202 160.86 190.439 161.109 189.75C161.359 189.046 161.718 188.445 162.187 187.946C162.671 187.433 163.258 187.037 163.947 186.758C164.637 186.465 165.414 186.318 166.279 186.318C167.233 186.318 168.061 186.391 168.765 186.538C169.484 186.67 170.085 186.795 170.569 186.912V197.12C170.569 198.88 170.115 200.156 169.205 200.948C168.296 201.74 166.917 202.136 165.069 202.136C164.351 202.136 163.669 202.077 163.023 201.96C162.393 201.843 161.843 201.703 161.373 201.542L161.747 199.76C162.158 199.921 162.657 200.061 163.243 200.178C163.845 200.31 164.468 200.376 165.113 200.376C166.331 200.376 167.203 200.134 167.731 199.65C168.274 199.166 168.545 198.396 168.545 197.34V196.856ZM168.523 188.364C168.318 188.305 168.039 188.254 167.687 188.21C167.35 188.151 166.888 188.122 166.301 188.122C165.201 188.122 164.351 188.481 163.749 189.2C163.163 189.919 162.869 190.872 162.869 192.06C162.869 192.72 162.95 193.285 163.111 193.754C163.287 194.223 163.515 194.612 163.793 194.92C164.087 195.228 164.417 195.455 164.783 195.602C165.165 195.749 165.553 195.822 165.949 195.822C166.492 195.822 166.991 195.749 167.445 195.602C167.9 195.441 168.259 195.257 168.523 195.052V188.364ZM183.364 182.6C185.505 182.6 187.148 183.011 188.292 183.832C189.45 184.639 190.03 185.849 190.03 187.462C190.03 188.342 189.868 189.097 189.546 189.728C189.238 190.344 188.783 190.85 188.182 191.246C187.595 191.627 186.876 191.906 186.026 192.082C185.175 192.258 184.214 192.346 183.144 192.346H181.45V198H179.316V182.974C179.917 182.827 180.584 182.732 181.318 182.688C182.066 182.629 182.748 182.6 183.364 182.6ZM183.54 184.47C182.63 184.47 181.934 184.492 181.45 184.536V190.52H183.056C183.789 190.52 184.449 190.476 185.036 190.388C185.622 190.285 186.114 190.124 186.51 189.904C186.92 189.669 187.236 189.354 187.456 188.958C187.676 188.562 187.786 188.056 187.786 187.44C187.786 186.853 187.668 186.369 187.434 185.988C187.214 185.607 186.906 185.306 186.51 185.086C186.128 184.851 185.681 184.69 185.168 184.602C184.654 184.514 184.112 184.47 183.54 184.47ZM202.194 192.28C202.194 193.189 202.062 194.011 201.798 194.744C201.534 195.477 201.16 196.108 200.676 196.636C200.207 197.164 199.642 197.575 198.982 197.868C198.322 198.147 197.603 198.286 196.826 198.286C196.049 198.286 195.33 198.147 194.67 197.868C194.01 197.575 193.438 197.164 192.954 196.636C192.485 196.108 192.118 195.477 191.854 194.744C191.59 194.011 191.458 193.189 191.458 192.28C191.458 191.385 191.59 190.571 191.854 189.838C192.118 189.09 192.485 188.452 192.954 187.924C193.438 187.396 194.01 186.993 194.67 186.714C195.33 186.421 196.049 186.274 196.826 186.274C197.603 186.274 198.322 186.421 198.982 186.714C199.642 186.993 200.207 187.396 200.676 187.924C201.16 188.452 201.534 189.09 201.798 189.838C202.062 190.571 202.194 191.385 202.194 192.28ZM200.06 192.28C200.06 190.989 199.767 189.97 199.18 189.222C198.608 188.459 197.823 188.078 196.826 188.078C195.829 188.078 195.037 188.459 194.45 189.222C193.878 189.97 193.592 190.989 193.592 192.28C193.592 193.571 193.878 194.597 194.45 195.36C195.037 196.108 195.829 196.482 196.826 196.482C197.823 196.482 198.608 196.108 199.18 195.36C199.767 194.597 200.06 193.571 200.06 192.28ZM207.735 196.526C208.571 196.526 209.187 196.416 209.583 196.196C209.993 195.976 210.199 195.624 210.199 195.14C210.199 194.641 210.001 194.245 209.605 193.952C209.209 193.659 208.556 193.329 207.647 192.962C207.207 192.786 206.781 192.61 206.371 192.434C205.975 192.243 205.63 192.023 205.337 191.774C205.043 191.525 204.809 191.224 204.633 190.872C204.457 190.52 204.369 190.087 204.369 189.574C204.369 188.562 204.743 187.763 205.491 187.176C206.239 186.575 207.258 186.274 208.549 186.274C208.871 186.274 209.194 186.296 209.517 186.34C209.839 186.369 210.14 186.413 210.419 186.472C210.697 186.516 210.939 186.567 211.145 186.626C211.365 186.685 211.533 186.736 211.651 186.78L211.277 188.54C211.057 188.423 210.712 188.305 210.243 188.188C209.773 188.056 209.209 187.99 208.549 187.99C207.977 187.99 207.478 188.107 207.053 188.342C206.627 188.562 206.415 188.914 206.415 189.398C206.415 189.647 206.459 189.867 206.546 190.058C206.649 190.249 206.796 190.425 206.987 190.586C207.192 190.733 207.441 190.872 207.735 191.004C208.028 191.136 208.38 191.275 208.791 191.422C209.333 191.627 209.817 191.833 210.243 192.038C210.668 192.229 211.027 192.456 211.321 192.72C211.629 192.984 211.863 193.307 212.025 193.688C212.186 194.055 212.267 194.509 212.267 195.052C212.267 196.108 211.871 196.907 211.079 197.45C210.301 197.993 209.187 198.264 207.735 198.264C206.723 198.264 205.931 198.176 205.359 198C204.787 197.839 204.398 197.714 204.193 197.626L204.567 195.866C204.801 195.954 205.175 196.086 205.689 196.262C206.202 196.438 206.884 196.526 207.735 196.526ZM216.805 186.56H221.139V188.276H216.805V193.556C216.805 194.128 216.849 194.605 216.937 194.986C217.025 195.353 217.157 195.646 217.333 195.866C217.509 196.071 217.729 196.218 217.993 196.306C218.257 196.394 218.565 196.438 218.917 196.438C219.533 196.438 220.024 196.372 220.391 196.24C220.772 196.093 221.036 195.991 221.183 195.932L221.579 197.626C221.374 197.729 221.014 197.853 220.501 198C219.988 198.161 219.401 198.242 218.741 198.242C217.964 198.242 217.318 198.147 216.805 197.956C216.306 197.751 215.903 197.45 215.595 197.054C215.287 196.658 215.067 196.174 214.935 195.602C214.818 195.015 214.759 194.341 214.759 193.578V183.37L216.805 183.018V186.56ZM226.404 196.526C227.24 196.526 227.856 196.416 228.252 196.196C228.663 195.976 228.868 195.624 228.868 195.14C228.868 194.641 228.67 194.245 228.274 193.952C227.878 193.659 227.226 193.329 226.316 192.962C225.876 192.786 225.451 192.61 225.04 192.434C224.644 192.243 224.3 192.023 224.006 191.774C223.713 191.525 223.478 191.224 223.302 190.872C223.126 190.52 223.038 190.087 223.038 189.574C223.038 188.562 223.412 187.763 224.16 187.176C224.908 186.575 225.928 186.274 227.218 186.274C227.541 186.274 227.864 186.296 228.186 186.34C228.509 186.369 228.81 186.413 229.088 186.472C229.367 186.516 229.609 186.567 229.814 186.626C230.034 186.685 230.203 186.736 230.32 186.78L229.946 188.54C229.726 188.423 229.382 188.305 228.912 188.188C228.443 188.056 227.878 187.99 227.218 187.99C226.646 187.99 226.148 188.107 225.722 188.342C225.297 188.562 225.084 188.914 225.084 189.398C225.084 189.647 225.128 189.867 225.216 190.058C225.319 190.249 225.466 190.425 225.656 190.586C225.862 190.733 226.111 190.872 226.404 191.004C226.698 191.136 227.05 191.275 227.46 191.422C228.003 191.627 228.487 191.833 228.912 192.038C229.338 192.229 229.697 192.456 229.99 192.72C230.298 192.984 230.533 193.307 230.694 193.688C230.856 194.055 230.936 194.509 230.936 195.052C230.936 196.108 230.54 196.907 229.748 197.45C228.971 197.993 227.856 198.264 226.404 198.264C225.392 198.264 224.6 198.176 224.028 198C223.456 197.839 223.068 197.714 222.862 197.626L223.236 195.866C223.471 195.954 223.845 196.086 224.358 196.262C224.872 196.438 225.554 196.526 226.404 196.526Z"
              fill="white"
            />
            <path
              d="M130 125C130 125 138 109 152 109C166 109 174 125 174 125C174 125 166 141 152 141C138 141 130 125 130 125Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M152 131C155.314 131 158 128.314 158 125C158 121.686 155.314 119 152 119C148.686 119 146 121.686 146 125C146 128.314 148.686 131 152 131Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  ) : (
    <Redirect to="/dashboardLogin" />
  );
};
export default DashboardOptions;
